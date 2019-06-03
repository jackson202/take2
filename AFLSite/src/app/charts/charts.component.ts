import { Component, OnInit, Input } from '@angular/core';
import {Team} from '../Team'
import {Game} from '../Game'
import {Tip} from '../Tip'
import {Observable} from 'rxjs';
import { StatGenPipe } from '../stat-gen.pipe';
import {DataServiceService} from '../data-service.service';
import {Chart} from 'chart.js';
import * as ChartAnnotation  from 'chartjs-plugin-datalabels';
import { GetGoalsSeasonPipe } from '../get-goals-season.pipe';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
  providers: [StatGenPipe, GetGoalsSeasonPipe]
})
export class ChartsComponent implements OnInit {

  
  @Input() team: Team;

games:Game[];
teams:Team[];
tips:Tip[];
chart = []
selectedValue: string = 'Selected Value';

winLoss: number[];
goals: number;
avgGoals: number;
behinds: number;
avgBehinds: number;

  constructor( private dataService: DataServiceService, private statPipe: StatGenPipe, private getGoals: GetGoalsSeasonPipe) {


   }


  ngOnInit() {
       let namedChartAnnotation = ChartAnnotation;
     namedChartAnnotation["id"]="annotation";
     Chart.pluginService.register( namedChartAnnotation); this.getGames();
    this.getAFLTeams();
    this.dataService.getGames().subscribe( res =>{
   this.winLoss = this.statPipe.transform(res, this.team.name)
   this.goals = this.getGoals.transform(res, this.team.name)[0];
     this.avgGoals = this.getGoals.transform(res, this.team.name)[2];
     this.behinds = this.getGoals.transform(res, this.team.name)[1];
     this.avgBehinds = this.getGoals.transform(res, this.team.name)[3];
      
      
       
        this.winLoss = this.statPipe.transform(res, this.team.name);
             
       this.chart.push( new Chart('canvas', {   
        type: 'pie',
        data: {
        datasets: [{backgroundColor: ["#00bbff", "#ff0000"],
        data: this.winLoss
      }],
    },
           options: {
             title: {
               display: true,
               text: "Win lose for" + this.team.name
            }
         
         
          }, 
           })
           )
      
      
            
         

       
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




