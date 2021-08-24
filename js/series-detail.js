

class SeriesDetail{

    static NO_GENRE = [];
    static NO_EPISODES = -1;

    constructor(element){
        this.element = element;
        this.imgSrc = null;
        this.genre = [];
        this.episodes = -1;

    }

    setSeriesDetails(imgSrc, genre, episodes){
        this.imgSrc = imgSrc;
        this.genre = genre;
        this.episodes = episodes;
        this.updateDisplayDetails()
    }

    updateDisplayDetails(){
        this.updateImage();
        this.updateGenre();
        this.updateEpisodes();

    }

    updateImage(){
        var img = this.element.querySelector(".detail-image");
        img.src = this.imgSrc;
    }

    updateGenre(){
        var genreList = this.element.querySelector("#series-genre-list");
        this.removeAllDisplayGenre();
        for(var currentGenre of this.genre){
            genreList.appendChild(this.createItemList(currentGenre));
        }
    }

    removeAllDisplayGenre(){
        var genreList = this.element.querySelector("#series-genre-list");
        while(genreList.childElementCount > 0){
            var child = genreList.firstElementChild;
            child.remove();
        }
    }

    createItemList(value){
        var itemTag = document.createElement("li");
        var itemText = document.createTextNode(value);
        itemTag.appendChild(itemText);
        return itemTag;
    }

    updateEpisodes(){
        var episodesLabel = this.element.querySelector("#episodes-value");
        episodesLabel.innerHTML = this.episodes.toString();

    }

    onChangedSelection(selectionData){
        this.setSeriesDetails(selectionData.imgSrc, selectionData.genre, selectionData.episodes);
    }
}


export {SeriesDetail};