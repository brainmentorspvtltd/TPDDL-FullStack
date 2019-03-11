import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(mobileNumber: string,noOfCharsToPick?:number,symbol?:string): string {
    if(!noOfCharsToPick){
      noOfCharsToPick = 2;
    }
    if(!symbol){
      symbol='*';
    }
    let index = mobileNumber.length - noOfCharsToPick;
    var remChars = mobileNumber.substring(index);
    return symbol.repeat(index) + remChars;
  }

}
