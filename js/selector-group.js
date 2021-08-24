

class Selector{

    constructor(element, data){
        this.element = element;
        this.isSelected = false;
        this.data = data;
        this.onSelectedListeners = [];
        this.id = this.element.id;
        this.configureOnSelected();
    }

    getId(){
        return this.id;
    }

    configureOnSelected(){
        var button = this.element.querySelector(".button-to-select");
        button.addEventListener('click', this.notifyListeners.bind(this));

    }

    notifyListeners(){
        for(var currentListener of this.onSelectedListeners){
            currentListener.onSelectorClick(this.id);
        }
    }

    setSelected(value){
        this.isSelected = value;
        this.setSelectedStyle();
    }

    isSelected(){
        return this.isSelected;
    }

    setSelectedStyle(){
        var button = this.element.querySelector(".button-to-select");
        if(this.isSelected){
            this.element.style.backgroundColor = "green";

            button.innerHTML = "SELECTED";
        }
        else{
            this.element.style.backgroundColor = "white";
            button.innerHTML = "SELECT";
        }
    }

    addOnSelectedListener(listener){
        this.onSelectedListeners.push(listener);

    }
};


class SelectorGroup{



    constructor(){
        this.NO_SELECTED = -1;
        this.selectors = [];
        this.selectedIndex = this.NO_SELECTED;
        this.onChangedListeners = []

    }

    addSelector(newSelector){
        newSelector.setSelected(false);
        newSelector.addOnSelectedListener(this);
        this.selectors.push(newSelector);
    }

    onSelectorClick(selectorId){
        var newSelectedIndex = this.NO_SELECTED;
        for(var currentSelectorIndex in this.selectors){
            if(selectorId == this.selectors[currentSelectorIndex].getId()){
                newSelectedIndex = currentSelectorIndex;
            }
        }
        var isChanged = this.updateSelection(newSelectedIndex);

        if(isChanged){
            this.notifyOnChangedListeners();
        }
    }

    updateSelection(newSelectedIndex){
        if(this.selectedIndex != newSelectedIndex){

            if(this.selectedIndex != this.NO_SELECTED){
                this.selectors[this.selectedIndex].setSelected(false);
            }

            this.selectors[newSelectedIndex].setSelected(true);
            this.selectedIndex = newSelectedIndex;
            return true;
        }
        return false;
    }

    notifyOnChangedListeners(){

        for(var listener of this.onChangedListeners){
            listener.onChangedSelection(this.getSelectionData());
        }
    }

    getSelectionData(){
        return this.selectors[this.selectedIndex].data;
    }

    addOnChangedListener(listener){
        this.onChangedListeners.push(listener);
    }



};

export {Selector, SelectorGroup}