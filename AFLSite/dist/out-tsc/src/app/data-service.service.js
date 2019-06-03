import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Team } from './Team';
import { Game } from './Game';
import { Tip } from './Tip';
import { Ladder } from './Ladder';

var DataServiceService = /** @class */ (function () {
    function DataServiceService(http) {
        this.http = http;
    }
    DataServiceService.prototype.getTeams = function () {
        return this.http.get('https://api.squiggle.com.au/?q=teams').pipe(map(function (data) { return data.teams.map(function (item) { return new Team(item.logo, item.id, item.name, item.abbrev); }); }));
    };
    DataServiceService.prototype.getGames = function () {
        return this.http.get('https://api.squiggle.com.au/?q=games;year=2019').pipe(map(function (data) { return data.games.map(function (item) { return new Game(item.complete, item.is_grand_final, item.tz, item.hbehinds, item.ateam, item.winnerteamid, item.hgoals, item.updated, item.round, item.is_final, item.hscore, item.abehinds, item.winner, item.ascore, item.hteam, item.ateamid, item.venue, item.hteamid, item.agoals, item.year, item.date, item.id); }); }));
    };
    DataServiceService.prototype.getTips = function () {
        return this.http.get('https://api.squiggle.com.au/?q=tips;year=2019').pipe(map(function (data) { return data.tips.map(function (item) { return new Tip(item.confidence, item.bits, item.gameid, item.ateamid, item.venue, item.year, item.correct, item.date, item.updated, item.hteam, item.tipteamid, item.margin, item.err, item.tip, item.ateam, item.source, item.sourceid, item.hconfidence, item.hteamid, item.round); }); }));
    };

    DataServiceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], DataServiceService);
    return DataServiceService;
}());
export { DataServiceService };
//# sourceMappingURL=data-service.service.js.map