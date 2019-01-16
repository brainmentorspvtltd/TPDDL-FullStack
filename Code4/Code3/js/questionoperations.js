const questionOperations = {
    questions:[],
    //add(id , name, ans1, ans2, ans3, ans4,rans,score){
        add(questionObject){
        //var questionObject = new Question(id, name,ans1, ans2, ans3, ans4,rans,score);
        this.questions.push(questionObject);
        console.log("After Push ",this.questions);
    },
    mark(id){
        var objectFound = this.questions.find(questionObject=>questionObject.id==id);
        objectFound.toggle();
    },
    deleteRecords(){
        return this.questions = this.questions.filter(questionObject=>!questionObject.isMarked)
    },
    countMark(){
        return this.questions.filter(questionObject=>questionObject.isMarked).length;
    },
    countUnmark(){
        return this.questions.length - this.countMark();
    }
}