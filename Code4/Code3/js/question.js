class Question{
    constructor(id, name , ans1,ans2 , ans3, ans4,rans,score){
        this.id = id;
        this.name = name;
        this.ans1 = ans1;
        this.ans2 = ans2;
        this.ans3 = ans3;
        this.ans4 = ans4;
        this.rans = rans;
        this.score = score;
        this.isMarked = false;
    }
    toggle(){
        this.isMarked = !this.isMarked;
    }
}