import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styles: [`
        .thumbnail { min-height: 250px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
    `]
})
export class EventThumbnailComponent {

    @Input('eventObjFromParent') event: any;
    @Output() eventClickFromChild = new EventEmitter();

    handledClickMe() {
        this.eventClickFromChild.emit(this.event.name);
    }

    logFoo() {
        console.log('FOO from child');
    }

    constructor() {

    }
}