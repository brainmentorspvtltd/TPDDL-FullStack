const salaryOperation = {
    basicSalary : 0,
    takeSalary (basicSalary){
        this.basicSalary = parseInt(basicSalary);  // member = local variable 
    },
    hra(){
        return this.basicSalary * 0.30;
    },
    da(){
        return this.basicSalary * 0.10;
    },
    ta(){
        return this.basicSalary * 0.20;
    },
    pf(){
        return this.basicSalary * 0.05;
    },
    tax(){
        if(this.gs()<300000){
            return 0;
        }
        else
        if(this.gs()>=300000 && this.gs()<500000){
            return this.gs() *0.10;
        }
        else
        if(this.gs()>=500000 && this.gs()<900000){
            return this.gs() * 0.20;
        }
        else
        if(this.gs()>=900000 ){
            return this.gs() * 0.30;
        }
        return 0;
    },
    gs(){
     return this.basicSalary + this.hra() + this.da() + this.ta() - this.pf();
    },
    ns(){
        return this.gs() - this.tax();
    }

}