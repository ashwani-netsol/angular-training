import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greetingForTime'
})
export class GreetingPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let today = new Date();
    let hourNow = today.getHours();
    
    if (hourNow > 4 && hourNow < 12) {
      value = 'Good Morning';
    } else if (hourNow > 12 && hourNow < 17) {
      value = 'Good Afternoon';
    } else if (hourNow > 17 && hourNow < 20) {
      value = 'Good Evening';
    } else if (hourNow > 20 && hourNow < 22) {
      value = 'Good Night';
    } else if (hourNow > 22 || hourNow >= 0) {
      value = 'Dreaming';
    }

    return value;
  }

}
