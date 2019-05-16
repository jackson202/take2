import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterGame'
})
export class FilterGamePipe implements PipeTransform {

  transform(value: any[], teamId: String): any {
  return   value.filter((item) => item.complete == 0 && (item.ateam == teamId || item.hteam == teamId))   

 };
  }





