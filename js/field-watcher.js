class FieldWatcher{

    constructor(){
        this.fields = [];
        this.onCompletedFieldsListeners = [];
    }

    addField(field){
        this.fields.push(field);
    }

    addOnCompletedFieldsListener(listener){
        this.onCompletedFieldsListeners.push(listener);
    }

    onButtonClicked(){
        var correctFields = 0;
        for(var currentField of this.fields){
            if(currentField.isCompletedField()){
                currentField.setCorrectlyCompleted(true);
                correctFields += 1;
            }
            else{
                currentField.setCorrectlyCompleted(false);
            }
        }
        if(correctFields == this.fields.length){
            this.notifyOnCompletedFieldsListeners();
        }
    }

    notifyOnCompletedFieldsListeners(){
        for(var currentListener of this.onCompletedFieldsListeners){
            currentListener.onCompletedFields();
        }
    }
};

export {FieldWatcher};