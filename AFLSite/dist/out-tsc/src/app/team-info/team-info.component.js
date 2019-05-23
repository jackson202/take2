import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Team } from '../Team';
import { Game } from '../Game';
import { Tip } from '../Tip';
import { DataServiceService } from '../data-service.service';
var TeamInfoComponent = /** @class */ (function () {
    function TeamInfoComponent(dataService) {
        this.dataService = dataService;
        this.selectedValue = 'Selected Value';
        this.selectedDay = '1';
        this.currentDate = new Date();
    }
    TeamInfoComponent.prototype.ngOnInit = function () {
        this.getGames();
        this.getAFLTeams();
        this.getTips();
    };
    TeamInfoComponent.prototype.getGames = function () {
        var _this = this;
        this.dataService.getGames().subscribe(function (temp) { _this.games = temp; });
    };
    TeamInfoComponent.prototype.getAFLTeams = function () {
        var _this = this;
        this.dataService.getTeams().subscribe(function (temp) { _this.teams = temp; });
    };
    TeamInfoComponent.prototype.selectChangeHandler = function (event) {
        this.selectedDay = event.target.value;
    };
    TeamInfoComponent.prototype.getTips = function () {
        var _this = this;
        this.dataService.getTips().subscribe(function (temp) { _this.tips = temp; });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Team)
    ], TeamInfoComponent.prototype, "team", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Game)
    ], TeamInfoComponent.prototype, "game", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Tip)
    ], TeamInfoComponent.prototype, "tip", void 0);
    TeamInfoComponent = tslib_1.__decorate([
        Component({
            selector: 'app-team-info',
            templateUrl: './team-info.component.html',
            styleUrls: ['./team-info.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [DataServiceService])
    ], TeamInfoComponent);
    return TeamInfoComponent;
}());
export { TeamInfoComponent };
//# sourceMappingURL=team-info.component.js.map