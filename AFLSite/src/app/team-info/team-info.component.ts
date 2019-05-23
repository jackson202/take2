import { Component, OnInit, Input } from '@angular/core';
import {Team} from '../Team'
import {Game} from '../Game'
import {Tip} from '../Tip'
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
  @Input() tip: Tip;

games:Game[];
selectedValue: string = 'Selected Value';

teams:Team[];
tips:Tip[];
selectedDay: string = '1';
currentDate = new Date();

  ngOnInit() {
    this.getGames();
    this.getAFLTeams();
    this.getTips();



  }
  constructor(private dataService: DataServiceService) { }
  getGames(): void {
    this.dataService.getGames().subscribe(temp => { this.games = temp;});
}
    getAFLTeams(): void {
      this.dataService.getTeams().subscribe(temp => { this.teams = temp;});
    }
    selectChangeHandler (event: any) {
      this.selectedDay = event.target.value;
    }
  
    getTips(): void {
      this.dataService.getTips().subscribe(temp => { this.tips = temp;});
    }

    


}
