import { Store } from "./store.js";
import { Connection } from "./connection.js";
import { UnsubscribeFunc } from "./types.js";
export declare type Collection<State> = {
    state: State;
    refresh(): Promise<void>;
    subscribe(subscriber: (state: State) => void): UnsubscribeFunc;
};
export declare const getCollection: <State>(conn: Connection, key: string, fetchCollection: (conn: Connection) => Promise<State>, subscribeUpdates?: ((conn: Connection, store: Store<State>) => Promise<UnsubscribeFunc>) | undefined) => Collection<State>;
export declare const createCollection: <State>(key: string, fetchCollection: (conn: Connection) => Promise<State>, subscribeUpdates: ((conn: Connection, store: Store<State>) => Promise<UnsubscribeFunc>) | undefined, conn: Connection, onChange: (state: State) => void) => UnsubscribeFunc;
