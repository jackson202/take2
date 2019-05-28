import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { mainpageComponent } from './mainpage/mainpage.component'

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {FilterGamePipe} from './filter-game.pipe';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { RouterModule, Routes } from '@angular/router';

import { DataServiceService } from './data-service.service';
import { TeamInfoComponent } from './team-info/team-info.component';
import { TipFilterPipe } from './tip-filter.pipe';
import { RivalsformComponent } from './rivalsform/rivalsform.component';

const appRoutes: Routes = [ { path: 'rivalsform', component: RivalsformComponent }];

@NgModule({
  declarations: [
    AppComponent, mainpageComponent, TeamInfoComponent, FilterGamePipe, TipFilterPipe, RivalsformComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})

export class AppModule { }