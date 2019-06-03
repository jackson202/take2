import { Pipe, PipeTransform } from '@angular/core';
import { Team } from './Team';
import { Game } from './Game';

@Pipe({
  name: 'statGen'
})
export class StatGenPipe implements PipeTransform {

  transform(value: Game[], team: String): any {
    let record: number[] = [0, 0];
    var b = 0;
    for (var i = 0; i < value.length ; i++) {
      if(value[i].ateam == team ||  value[i].hteam == team)
      {
        if(!(value[i].winner == null))
        {
        if(value[i].winner == team)
        {
            record[0] = record[0] + 1;
        }
        else 
        {
          record[1] = record[1] + 1;

        }
      }      
      }
  }
  var b = record[0] + record[1];

  var data = [
    record[0],
    record[1]
]
   return data;
  }

}
