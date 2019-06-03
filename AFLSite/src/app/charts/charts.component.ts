import { Component, OnInit, Input } from '@angular/core';
import {Team} from '../Team'
import {Game} from '../Game'
import {Tip} from '../Tip'
import {Ladder} from '../Ladder'
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
chart = []; 
Ladders: Ladder[];
selectedValue: string = 'Selected Value';

winLoss: number[];
goals: number;
avgGoals: number;
behinds: number;
avgBehinds: number;

  constructor( private dataService: DataServiceService, private statPipe: StatGenPipe, private getGoals: GetGoalsSeasonPipe) {


   }


  ngOnInit() {
    this.getGames();
    this.getAFLTeams();
    this.getTips(); 
    let namedChartAnnotation = ChartAnnotation;
    namedChartAnnotation["id"]="annotation";
    Chart.pluginService.register( namedChartAnnotation);
  
  
       this.dataService.getGames().subscribe( res =>{

  this.winLoss = this.statPipe.transform(res, this.team.name)
  this.goals = this.getGoals.transform(res, this.team.name)[0];
  this.avgGoals = this.getGoals.transform(res, this.team.name)[2];
  this.behinds = this.getGoals.transform(res, this.team.name)[1];
  this.avgBehinds = this.getGoals.transform(res, this.team.name)[3];


this.chart = new Chart('canvas', {
    type: 'pie',
    data:   {
   labels: [
      'Win',
      'Loss',
  ],    
 datasets: [{
   label: "Win lose ratio for" + this.team.name,
    backgroundColor: ["#00bbff", "#ff0000"],
    data: [this.winLoss[0]  , this.winLoss[1]]   
    }],
    options: {
      title: {
        display: true,
        text: "Win lose ratio for" + this.team.name
      },
   
    ChartDataLabels:{
      datalabels: {      
        color: '#36A2EB'
      }, },
               }
  }


});
}) 

   

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




