"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
var Timer = /** @class */ (function () {
    function Timer(timeoutEvent) {
        this.timeoutEvent = timeoutEvent;
        this.timeoutIdx = null;
    }
    Timer.prototype.trigger = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.timeoutEvent.apply(this, params);
    };
    Timer.prototype.start = function (ms) {
        var _this = this;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        if (this.timeoutIdx !== null)
            return false;
        this.timeoutIdx = setTimeout(function () {
            if (_this.timeoutIdx === null)
                return;
            _this.timeoutIdx = null;
            _this.trigger.apply(_this, params);
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