
import {Field} from './field.js';

class CharacterSelector extends Field{

    static NO_SELECTED = -1;

    constructor(element, label){
        super(element, label);
    }

    isCompletedField(){
        return this.isSelectedCharacter();
    }

    isSelectedCharacter(){
        return this.element.selectedIndex != CharacterSelector.NO_SELECTED;
    }

    setCharacters(values){
        this.removeAllCharacters();
        for(var currentValueIndex in values){
            this.element.appendChild(this.createOption(values[currentValueIndex]));
        }
    }

    removeAllCharacters(){
        while(this.element.options.length > 0){
            this.element.remove(0);
        }
    }

    createOption(value){
        var option = document.createElement('option');
        var optionText = document.createTextNode(value);
        option.appendChild(optionText);
        option.setAttribute('value', value);
        return option;
    }

    getSelectedCharacter(){
        var index = this.element.selectedIndex;
        if(index == CharacterSelector.NO_SELECTED){
            return null;
        }

        return this.values[index];
    }


    onChangedSelection(selectionData){
        this.setCharacters(selectionData.characters);
    }

};

export {CharacterSelector};