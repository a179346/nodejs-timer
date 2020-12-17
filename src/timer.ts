type TimeoutEvent = (param:any) => void;

export class Timer {
  private timeoutEvent: TimeoutEvent;
  private timeoutIdx: number |　null;

  constructor (timeoutEvent: TimeoutEvent) {
    this.timeoutEvent = timeoutEvent;
    this.timeoutIdx = null;
  }

  public trigger (param: any): void {
    this.timeoutEvent(param);
  }

  public start (ms: number, param: any): boolean {
    if (this.timeoutIdx !== null) return false;
    this.timeoutIdx = setTimeout(() => {
      this.timeoutIdx = null;
      this.trigger(param);
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