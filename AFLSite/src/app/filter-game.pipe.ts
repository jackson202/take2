import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterGame'
})
export class FilterGamePipe implements PipeTransform {

  transform(value: any[], teamId: String, played: number): any {
  return   value.filter((item) => item.complete == played && (item.ateam == teamId || item.hteam == teamId))   

 };
  }





