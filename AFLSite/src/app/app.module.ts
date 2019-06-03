import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { mainpageComponent } from './mainpage/mainpage.component'

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {FilterGamePipe} from './filter-game.pipe';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { GoogleChartsModule } from 'angular-google-charts';


import { RouterModule, Routes } from '@angular/router';

import { DataServiceService } from './data-service.service';
import { TeamInfoComponent } from './team-info/team-info.component';
import { TipFilterPipe } from './tip-filter.pipe';
import { RivalsformComponent } from './rivalsform/rivalsform.component';
import { RivalTeamFinderPipe } from './rival-team-finder.pipe';
import { TeamgraphComponent } from './teamgraph/teamgraph.component';
import { ChartsComponent } from './charts/charts.component';
import { StatGenPipe } from './stat-gen.pipe';

const appRoutes: Routes = [ { path: 'rivalsform', component: RivalsformComponent }, { path: 'teamgraph', component: TeamgraphComponent }];

@NgModule({
  declarations: [
    AppComponent, mainpageComponent, TeamInfoComponent, FilterGamePipe, TipFilterPipe, RivalsformComponent, RivalTeamFinderPipe, TeamgraphComponent, ChartsComponent, StatGenPipe
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, RouterModule.forRoot(appRoutes), GoogleChartsModule],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})

export class AppModule { }