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

  title = 'Win/Loss Ratio';
   type = 'PieChart';
   data = [
      ['Firefox', 45.0],
      ['IE', 26.8],
      ['Chrome', 12.8],
      ['Safari', 8.5],
      ['Opera', 6.2],
      ['Others', 0.7] 
   ];
   columnNames = ['Win', 'Loss'];
   options = {    
   };
   width = 550;
   height = 400;

}
