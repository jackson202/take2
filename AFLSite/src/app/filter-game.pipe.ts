import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterGame'
})
export class FilterGamePipe implements PipeTransform {

  transform(value: any[], teamId: any, played: any): any {
    if (!value) return value;
    if (!teamId) return value;
    return   value.filter((item) => item.complete == played && (item.ateam == teamId || item.hteam == teamId))   

 };
  }

