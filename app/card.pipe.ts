import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'cardpipe'
})
export class CardPipe implements PipeTransform{
  transform(cardno:string):string{
    console.log('Card Pipe Call', cardno );
    let card = 'http://icons.iconarchive.com/icons/icons8/windows-8/256/City-No-Credit-Cards-icon.png';
    if(cardno && cardno.startsWith("22")){
        card = 'http://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/Master-Card-Blue-icon.png';
      }
      else
      if(cardno && cardno.startsWith("44")){
        card = 'http://www.myiconfinder.com/uploads/iconsets/256-256-4c5308bf863a00c56870d053e6ba37c6.png';
      }
      return card;
  }
}
