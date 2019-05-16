import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MainpaigeComponent } from './mainpaige/mainpaige.component'

import {NavbarComponent} from './navbar/navbar.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {FilterGamePipe} from './filter-game.pipe';

import { AppComponent } from './app.component';


import { RouterModule, Routes } from '@angular/router';

import { DataServiceService } from './data-service.service';
import { TeamInfoComponent } from './team-info/team-info.component';

@NgModule({
  declarations: [
    AppComponent, MainpaigeComponent, NavbarComponent, TeamInfoComponent, FilterGamePipe
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})

export class AppModule { }