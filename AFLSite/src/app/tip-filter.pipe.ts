import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipFilter'
})
export class TipFilterPipe implements PipeTransform {

  transform(value: any[], teamId: String): any {
    if (!value) return value;
    if (!teamId) return value;
    var round;
    for (var i = 0; i < value.length ; i++) {
      if(new Date(value[i].date) >= new Date() && ((value[i].ateam == teamId) || (value[i].hteam == teamId)) )
      {
        round = value[i].round;
        break;       
      }
  }
    return   value.filter((item) => 
     round == item.round
    && ((item.ateam == teamId) || (item.hteam == teamId))
    )   

  

}
}
