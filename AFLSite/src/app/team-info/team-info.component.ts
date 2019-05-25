import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import {Team} from '../Team'
import {Game} from '../Game'
import {Tip} from '../Tip'
import {Observable} from 'rxjs';
import {DataServiceService} from '../data-service.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
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

    public captureScreen()
{
var dataGames = document.getElementById('contentToConvertGames');
var dataGamesNext = document.getElementById('contentToConvertNextGames');
var dataTips = document.getElementById('contentToConvertTips');

var imgWidth = 208;
var pageHeight = 295;
let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
var position = 0;

html2canvas(dataGames).then(canvas => {
// Few necessary setting options

var imgHeight = canvas.height * imgWidth / canvas.width;
var heightLeft = imgHeight;
const contentDataURL = canvas.toDataURL('image/png')
pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
pdf.addPage();

});


html2canvas(dataGamesNext).then(canvas => {
  // Few necessary setting options
  
  var imgHeight = canvas.height * imgWidth / canvas.width;
  var heightLeft = imgHeight;
  const contentDataURL = canvas.toDataURL('image/png')
  pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
  pdf.addPage();
  
  });

html2canvas(dataTips).then(canvas => {
  // Few necessary setting options
  
  var imgHeight = canvas.height * 140 / canvas.width;
  var heightLeft = imgHeight;
  const contentDataURL = canvas.toDataURL('image/png')
  pdf.addImage(contentDataURL, 'PNG', 0, 0, imgWidth, imgHeight)
pdf.save('AFL.pdf'); // Generated PDF

  });


}

}
