import { Pipe, PipeTransform } from '@angular/core';
import { Game } from './Game';

@Pipe({
  name: 'getGoalsSeason'
})
export class GetGoalsSeasonPipe implements PipeTransform {

  transform(value: Game[], teamId: string): any {
    //first goals
    //second behinds
    // 3rd average goals
    //4th average behinds

    var record: number[] = [0, 0, 0, 0];
    var count = 0;
    for(var i = 0; i < value.length; i++)
    {
      if( !(value[i].winner == null) )
      {
        if(value[i].ateam == teamId)
        {
         record[0] = record[0] + value[i].agoals 
         record[1] = record[1] + value[i].abehinds 
count++
        }

        if(value[i].hteam == teamId)
        {
          record[0] = record[0] + value[i].hgoals 
          record[1] = record[1] + value[i].hbehinds 
count++
        }
      }
    }
    record[2] = +( record[0] / count).toFixed(1);
    record[3] = +( record[1] / count ).toFixed(1);

    return record;
  }

}
