const questionOperations = {
    questions:[],
    //add(id , name, ans1, ans2, ans3, ans4,rans,score){
        add(questionObject){
        //var questionObject = new Question(id, name,ans1, ans2, ans3, ans4,rans,score);
        this.questions.push(questionObject);
        console.log("After Push ",this.questions);
    }
}