import { createStore } from "./store.js";
export const getCollection = (conn, key, fetchCollection, subscribeUpdates) => {
    if (conn[key]) {
        return conn[key];
    }
    let active = 0;
    let unsubProm;
    let store = createStore();
    const refresh = () => fetchCollection(conn).then((state) => store.setState(state, true));
    const refreshSwallow = () => refresh().catch((err) => {
        // Swallow errors if socket is connecting, closing or closed.
        // We will automatically call refresh again when we re-establish the connection.
        if (conn.connected) {
            throw err;
        }
    });
    conn[key] = {
        get state() {
            return store.state;
        },
        refresh,
        subscribe(subscriber) {
            active++;
            // If this was the first subscriber, attach collection
            if (active === 1) {
                if (subscribeUpdates) {
                    unsubProm = subscribeUpdates(conn, store);
                }
                // Fetch when connection re-established.
                conn.addEventListener("ready", refreshSwallow);
                refreshSwallow();
            }
            const unsub = store.subscribe(subscriber);
            if (store.state !== undefined) {
                // Don't call it right away so that caller has time
                // to initialize all the things.
                setTimeout(() => subscriber(store.state), 0);
            }
            return () => {
                unsub();
                active--;
                if (!active) {
                    // Unsubscribe from changes
                    if (unsubProm)
                        unsubProm.then((unsub) => {
                            unsub();
                        });
                    conn.removeEventListener("ready", refresh);
                }
            };
        },
    };
    return conn[key];
};
// Legacy name. It gets a collection and subscribes.
export const createCollection = (key, fetchCollection, subscribeUpdates, conn, onChange) => getCollection(conn, key, fetchCollection, subscribeUpdates).subscribe(onChange);
