declare type TimeoutEvent<T extends any[]> = (...params: T) => void;
export declare class Timer<T extends any[]> {
    private timeoutEvent;
    private timeoutIdx;
    constructor(timeoutEvent: TimeoutEvent<T>);
    trigger(...params: T): void;
    start(ms: number, ...params: T): boolean;
    clear(): boolean;
    isRunning(): boolean;
}
export {};
