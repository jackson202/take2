import { Pipe, PipeTransform } from '@angular/core';
import {Team} from './Team';

@Pipe({
  name: 'rivalTeamFinder'
})
export class RivalTeamFinderPipe implements PipeTransform {


  transform(value: any[], team1: Team, team2: Team): any {
    if (!value) return value;
   
    return value.filter((item) => 
    (item.ateam == team1.name || item.ateam == team2.name) &&   (item.hteam == team2.name || item.hteam == team1.name));
  }

}
