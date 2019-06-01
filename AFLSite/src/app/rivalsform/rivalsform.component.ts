import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {DataServiceService} from '../data-service.service';
import {Team} from '../Team';
import {Game} from '../Game';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-rivalsform',
  templateUrl: './rivalsform.component.html',
  styleUrls: ['./rivalsform.component.css']
})
export class RivalsformComponent implements OnInit {

  teams:Team[];
  games:Game[];

  teamName: Team[];

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
  public captureScreen()
  {
  var dataRivals = document.getElementById('contentToConvertRivals');
  var imgWidth = 208;
  var pageHeight = 295;
  let pdf = new jspdf('p', 'mm', 'a4'); 
  var position = 0;
  
  html2canvas(dataRivals).then(canvas => {
  
  var imgHeight = canvas.height * imgWidth / canvas.width;
  var heightLeft = imgHeight;
  const contentDataURL = canvas.toDataURL('image/png')
  pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
  pdf.addPage();
  pdf.save('AFL.pdf'); 

  });
  
  }
}