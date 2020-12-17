declare type TimeoutEvent = (param: any) => void;
export declare class Timer {
    private timeoutEvent;
    private timeoutIdx;
    constructor(timeoutEvent: TimeoutEvent);
    trigger(param: any): void;
    start(ms: number, param: any): boolean;
    clear(): boolean;
    isRunning(): boolean;
}
export {};
