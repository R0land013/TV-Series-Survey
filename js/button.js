

class Button{

    constructor(buttonElement){
        this.element = buttonElement;
        this.element.addEventListener('click', this.notifyOnClickListeners.bind(this));
        this.onClickListeners = [];
    }

    addOnClickListener(listener){
        this.onClickListeners.push(listener);
    }

    notifyOnClickListeners(){
        for (var listener of this.onClickListeners) {
            listener.onButtonClicked();
        }
    }
}

export {Button};