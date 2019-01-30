import {Question} from './Question';
export const questionOperations={
questions:[],
loadQuestion(){
   var ans=true; 
  for(let i=1; i<=5;i++){
      this.questions.push(new Question(i,i+"Question",i,ans));
      ans = !ans;
  }  
return this.questions;
}
}