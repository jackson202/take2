import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {DataServiceService} from '../data-service.service';
import {Team} from '../Team';

import {Game} from '../Game';

@Component({
  selector: 'app-teamgraph',
  templateUrl: './teamgraph.component.html',
  styleUrls: ['./teamgraph.component.css']
})
export class TeamgraphComponent implements OnInit {

	teams:Team[];
  	games:Game[];
    

  display: false;

submitted: false;
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

    
    
  
}
