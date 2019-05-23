import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {DataServiceService} from '../data-service.service';
import {Team} from '../Team';
import {Game} from '../Game';
import {Tip} from '../Tip';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class mainpageComponent implements OnInit {

  teams:Team[];
  games:Game[];
  tips:Tip[];

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.getAFLTeams();
    this.getGames();
    this.getTips();

  }

  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp;});
  }
  getGames(): void {
    this.dataService.getGames().subscribe(temp => { this.games = temp;});
  }

  getTips(): void {
    this.dataService.getTips().subscribe(temp => { this.tips = temp;});
  }

  selectedTeam: Team;
  onSelect(team: Team): void {
    this.selectedTeam = team;
  }
}