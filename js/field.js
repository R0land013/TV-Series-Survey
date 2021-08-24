

class Field{

    constructor(element, label){
        this.element = element;
        this.label = label;
    }

    setCorrectlyCompleted(completed){
        if(completed){
            this.setCompletedStyle();
        }
        else{
            this.setNoCompletedStyle();
        }
    }

    setCompletedStyle(){
        this.label.style.color = 'black';
    }

    setNoCompletedStyle(){
        this.label.style.color = 'red';
    }

    isCompletedField(){
        throw 'No implemented';
    }
}
export{Field};