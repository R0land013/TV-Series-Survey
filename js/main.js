
import {bigBang, mrRobot, gameThrones} from './series.js';
import {Selector, SelectorGroup} from './selector-group.js';
import { CharacterSelector } from './character-selector.js';
import { SeriesDetail } from './series-detail.js';
import {MessageDisplay} from './message-display.js';
import {Button} from './button.js';
import { TextArea } from './textarea.js';
import {FieldWatcher} from './field-watcher.js';

document.addEventListener("DOMContentLoaded", function(){

    let bigBangSelector = new Selector(document.querySelector("#big-bang-selector"), bigBang);
    let mrRobotSelector = new Selector(document.querySelector("#mr-robot-selector"), mrRobot);
    var gameThronesSelector = new Selector(document.querySelector("#game-thrones-selector"), gameThrones);

    var selectionGroup = new SelectorGroup();
    selectionGroup.addSelector(bigBangSelector);
    selectionGroup.addSelector(mrRobotSelector);
    selectionGroup.addSelector(gameThronesSelector);


    bigBangSelector.addOnSelectedListener(selectionGroup);
    mrRobotSelector.addOnSelectedListener(selectionGroup);
    gameThronesSelector.addOnSelectedListener(selectionGroup);

    var characterSelector = new CharacterSelector(document.querySelector("#character-selector"),
    document.querySelector('#character-selector-label'));
    selectionGroup.addOnChangedListener(characterSelector);

    var seriesDetail = new SeriesDetail(document.querySelector("#series-details"));
    selectionGroup.addOnChangedListener(seriesDetail);

    var submitMessagePanel = new MessageDisplay(document.querySelector('body'));

    var fieldWatcher = new FieldWatcher();
    fieldWatcher.addField(characterSelector);
    var textArea = new TextArea(document.querySelector('#liked-things'), document.querySelector('#liked-things-label'));
    fieldWatcher.addField(textArea);
    fieldWatcher.addOnCompletedFieldsListener(submitMessagePanel)

    var submitButton = new Button(document.querySelector('#submit-button'));
    submitButton.addOnClickListener(fieldWatcher);
});

