import { Component, OnInit, Input } from '@angular/core';
import {Team} from '../Team'
import {Game} from '../Game'
import {Tip} from '../Tip'
import {Observable} from 'rxjs';
import { StatGenPipe } from '../stat-gen.pipe';
import {DataServiceService} from '../data-service.service';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
  providers: [StatGenPipe]
})
export class ChartsComponent implements OnInit {
  @Input() team: Team;

games:Game[];
teams:Team[];
tips:Tip[];
chart = []; 
selectedValue: string = 'Selected Value';

winLoss: number[];

  constructor( private dataService: DataServiceService, private statPipe: StatGenPipe) {


   }


  ngOnInit() {
   this.getGames();
    this.getAFLTeams();
    this.getTips();
       this.dataService.getGames().subscribe( res =>{
  this.winLoss = this.statPipe.transform(res, this.team.name)






this.chart = new Chart('canvas', {
    type: 'pie',
    data:   {
   labels: [
      'Win',
      'Loss',
  ],    
 datasets: [{
   label: "Win lose ratio for" + this.team.name,
    backgroundColor: ["#3e95cd", "#8e5ea2"],
    data: this.winLoss   
    }],
    options: {
      title: {
        display: true,
        text: "Win lose ratio for" + this.team.name
      }
    }


}


});

});
    
} 


    getGames(): void {
       this.dataService.getGames().subscribe(temp => { this.games = temp;});

  }



  
      getAFLTeams(): void {
        this.dataService.getTeams().subscribe(temp => { this.teams = temp;});
      }

    
      getTips(): void {
        this.dataService.getTips().subscribe(temp => { this.tips = temp;});
      }



  }




