

class MessagePanel{
    constructor(){
        this.createPanel();
        this.setPanelStyle();
    }

    createPanel(){
        this.panelElement = document.createElement('div');
        this.panelMessage = document.createElement('h1');

        var message = 'Thanks for your help';
        this.panelMessage.innerHTML = message;
        this.panelElement.appendChild(this.panelMessage);

        this.panelImage = document.createElement('img');
        this.panelImage.src = './img/ok.png'
        this.panelElement.appendChild(this.panelImage);

    }

    setPanelStyle(){
        //Panel style
        //this.panelElement.style.backgroundColor = 'red';
        this.panelElement.style.display = 'flex';
        this.panelElement.style.flexDirection = 'column';
        this.panelElement.style.width = '100%';
        this.panelElement.style.height = '100%';
        this.panelElement.style.zIndex = '100';
        this.panelElement.style.alignItems = 'center';


        //Message style
        this.panelMessage.style.color = 'white';
        this.panelMessage.style.font = 'inherit';
        this.panelMessage.style.fontSize = 'xx-large';

        //Image style
        this.panelImage.style.height = '70vh';


    }

    getHtmlElement(){
        return this.panelElement;
    }
};

class MessageDisplay{

    constructor(container){
        this.containerElement = container;
        this.createDisplayMessageElement();
        this.setStyle();
        this.isShown = false;
    }

    createDisplayMessageElement(){
        this.backgroundPanel = document.createElement('div');
        var messagePanel = new MessagePanel();
        this.backgroundPanel.appendChild(messagePanel.getHtmlElement());
    }

    setStyle(){
        this.backgroundPanel.style.position = 'fixed';
        this.backgroundPanel.style.height = '100vh';
        this.backgroundPanel.style.width = '100vw';
        this.backgroundPanel.style.backgroundColor = '#5b4646de';
        this.backgroundPanel.style.zIndex = '100';
    }

    show(){
        if(!this.isShown){
            this.addDisplay();
        }
    }

    addDisplay(){
        var firstChild = this.containerElement.firstChild;
        if(firstChild != null){
            this.containerElement.insertBefore(this.backgroundPanel, firstChild);
        }
        else{
            this.containerElement.appendChild(this.backgroundPanel);
        }
    }

    hide(){
        if(this.isShown){
            this.containerElement.removeChild(this.backgroundPanel);
        }
    }

    onCompletedFields(){
        this.show()
    }

}

export {MessageDisplay};