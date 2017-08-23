import { Component, Input } from '@angular/core';

@Component({
    selector: 'eventslist',
    template: `
        <hr/>
        <div>This is a line of text from the events list component</div>
        <hr/>
        <div>{{strInputVarfromParentEventsAppComponent}}</div>
    `
    
})
export class EventsListComponent {

    @Input('strInputVarFromEventsAppComponent') strInputVarfromParentEventsAppComponent: string;

    constructor() {
        
    }
}
