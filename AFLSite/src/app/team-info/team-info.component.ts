import { Component, OnInit, Input } from '@angular/core';
import {Team} from '../Team'
import {Game} from '../Game'
import {Observable} from 'rxjs';
import {DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})

export class TeamInfoComponent implements OnInit {
  @Input() team: Team;
  @Input() game: Game;

games:Game[];

teams:Team[];

  ngOnInit() {
    this.getGames();
    this.getAFLTeams();


  }
  constructor(private dataService: DataServiceService) { }
  getGames(): void {
    this.dataService.getGames().subscribe(temp => { this.games = temp;});
}
    getAFLTeams(): void {
      this.dataService.getTeams().subscribe(temp => { this.teams = temp;});
    }
  
}
