import { UnsubscribeFunc } from "./types.js";
declare type Listener<State> = (state: State) => void;
declare type Action<State> = (state: State, ...args: any[]) => Partial<State> | Promise<Partial<State>> | null;
declare type BoundAction<State> = (...args: any[]) => void;
export declare type Store<State> = {
    state: State | undefined;
    action(action: Action<State>): BoundAction<State>;
    setState(update: Partial<State>, overwrite?: boolean): void;
    subscribe(listener: Listener<State>): UnsubscribeFunc;
};
export declare const createStore: <State>(state?: State | undefined) => Store<State>;
export {};
