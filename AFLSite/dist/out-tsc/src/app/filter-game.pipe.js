import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var FilterGamePipe = /** @class */ (function () {
    function FilterGamePipe() {
    }
    FilterGamePipe.prototype.transform = function (value, teamId, played) {
        if (!value)
            return value;
        if (!teamId)
            return value;
        if (!played)
            return value;
        return value.filter(function (item) { return item.complete == played && (item.ateam == teamId || item.hteam == teamId); });
    };
    ;
    FilterGamePipe = tslib_1.__decorate([
        Pipe({
            name: 'filterGame'
        })
    ], FilterGamePipe);
    return FilterGamePipe;
}());
export { FilterGamePipe };
//# sourceMappingURL=filter-game.pipe.js.map