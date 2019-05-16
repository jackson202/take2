import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {DataServiceService} from '../data-service.service';
import {Team} from '../team';
import {Game} from '../game';


@Component({
  selector: 'app-mainpaige',
  templateUrl: './mainpaige.component.html',
  styleUrls: ['./mainpaige.component.css']
})
export class MainpaigeComponent implements OnInit {

  teams:Team[];
  games:Game[];

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.getAFLTeams();
    this.getGames();

  }

  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp;});
  }
  getGames(): void {
    this.dataService.getGames().subscribe(temp => { this.games = temp;});
  }

  selectedTeam: Team;
  onSelect(team: Team): void {
    this.selectedTeam = team;
  }
}