import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var TipFilterPipe = /** @class */ (function () {
    function TipFilterPipe() {
    }
    TipFilterPipe.prototype.transform = function (value, teamId) {
        if (!value)
            return value;
        if (!teamId)
            return value;
        var Currentdate = new Date();
        return value.filter(function (item) { return item.date < Currentdate && (item.ateam == teamId || item.hteam == teamId); });
    };
    TipFilterPipe = tslib_1.__decorate([
        Pipe({
            name: 'tipFilter'
        })
    ], TipFilterPipe);
    return TipFilterPipe;
}());
export { TipFilterPipe };
//# sourceMappingURL=tip-filter.pipe.js.map