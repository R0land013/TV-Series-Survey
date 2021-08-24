
import {Field} from './field.js';

class TextArea extends Field{

    constructor(element, label){
        super(element, label);
    }

    isCompletedField(){
        return !this.isEmpty();
    }

    isEmpty(){
        return this.element.value == "";
    }

    getText(){
        return this.element.value;
    }
};

export {TextArea};