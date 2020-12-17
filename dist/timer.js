"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
var Timer = /** @class */ (function () {
    function Timer(timeoutEvent) {
        this.timeoutEvent = timeoutEvent;
        this.timeoutIdx = null;
    }
    Timer.prototype.trigger = function (param) {
        this.timeoutEvent(param);
    };
    Timer.prototype.start = function (ms, param) {
        var _this = this;
        if (this.timeoutIdx !== null)
            return false;
        this.timeoutIdx = setTimeout(function () {
            _this.timeoutIdx = null;
            _this.trigger(param);
        }, ms);
        return true;
    };
    Timer.prototype.clear = function () {
        if (this.timeoutIdx === null)
            return false;
        clearTimeout(this.timeoutIdx);
        this.timeoutIdx = null;
        return true;
    };
    Timer.prototype.isRunning = function () {
        return this.timeoutIdx !== null;
    };
    return Timer;
}());
exports.Timer = Timer;
//# sourceMappingURL=timer.js.map