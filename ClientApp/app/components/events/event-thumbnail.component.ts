import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html'
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

    businessTime: string = "It's business time!";

    constructor() {

    }
}