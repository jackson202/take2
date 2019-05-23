import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { mainpageComponent } from './mainpage/mainpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterGamePipe } from './filter-game.pipe';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataServiceService } from './data-service.service';
import { TeamInfoComponent } from './team-info/team-info.component';
import { TipFilterPipe } from './tip-filter.pipe';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent, mainpageComponent, NavbarComponent, TeamInfoComponent, FilterGamePipe, TipFilterPipe
            ],
            imports: [
                BrowserModule, AppRoutingModule, HttpClientModule, NgbModule
            ],
            providers: [DataServiceService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map