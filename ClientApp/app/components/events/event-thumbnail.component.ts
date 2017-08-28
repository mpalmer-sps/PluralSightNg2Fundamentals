import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styles: [`
        .green { color: #003300 !important; }
        .bold { font-weight: bold; }
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

    getStartTimeClass() {
        // one approach for assigning classes is to return an object like the example below
        // const isEarlyStart = this.event && this.event.time === '8:00 am';
        // return { green: isEarlyStart, bold: isEarlyStart };

        // another option is to return a string or an empty string and assign the classes that way
        if (this.event && this.event.time === '8:00 am')
        {
            return 'green bold'
        }
        return ''
        
        
    }

    logFoo() {
        console.log('FOO from child');
    }

    foo: string = "foobar";

    constructor() {

    }
}