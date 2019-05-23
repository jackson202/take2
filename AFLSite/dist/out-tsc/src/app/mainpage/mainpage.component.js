import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataServiceService } from '../data-service.service';
var mainpageComponent = /** @class */ (function () {
    function mainpageComponent(dataService) {
        this.dataService = dataService;
    }
    mainpageComponent.prototype.ngOnInit = function () {
        this.getAFLTeams();
        this.getGames();
        this.getTips();
    };
    mainpageComponent.prototype.getAFLTeams = function () {
        var _this = this;
        this.dataService.getTeams().subscribe(function (temp) { _this.teams = temp; });
    };
    mainpageComponent.prototype.getGames = function () {
        var _this = this;
        this.dataService.getGames().subscribe(function (temp) { _this.games = temp; });
    };
    mainpageComponent.prototype.getTips = function () {
        var _this = this;
        this.dataService.getTips().subscribe(function (temp) { _this.tips = temp; });
    };
    mainpageComponent.prototype.onSelect = function (team) {
        this.selectedTeam = team;
    };
    mainpageComponent = tslib_1.__decorate([
        Component({
            selector: 'app-mainpage',
            templateUrl: './mainpage.component.html',
            styleUrls: ['./mainpage.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [DataServiceService])
    ], mainpageComponent);
    return mainpageComponent;
}());
export { mainpageComponent };
//# sourceMappingURL=mainpage.component.js.map