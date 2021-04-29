type TimeoutEvent<T extends any[]> = (...params:T) => void;

export class Timer<T extends any[]> {
  private timeoutEvent: TimeoutEvent<T>;
  private timeoutIdx: number |　null;

  constructor (timeoutEvent: TimeoutEvent<T>) {
    this.timeoutEvent = timeoutEvent;
    this.timeoutIdx = null;
  }

  public trigger (...params: T): void {
    this.timeoutEvent(...params);
  }

  public start (ms: number, ...params: T): boolean {
    if (this.timeoutIdx !== null) return false;
    this.timeoutIdx = setTimeout(() => {
      if(this.timeoutIdx === null) return;
      this.timeoutIdx = null;
      this.trigger(...params);
    }, ms);
    return true;
  }

  public clear (): boolean {
    if (this.timeoutIdx === null) return false;
    clearTimeout(this.timeoutIdx);
    this.timeoutIdx = null;
    return true;
  }

  public isRunning (): boolean {
    return this.timeoutIdx !== null;
  }
}