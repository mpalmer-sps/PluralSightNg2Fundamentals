import { Component, Input } from '@angular/core';

@Component({
    selector: 'events-list',
    template: `
        <hr/>
        <div>This is a line of text from the events-list component</div>
        <hr/>
        <div>{{strInputVarfromParentEventsAppComponent}}</div>
        <hr/>
        <eventpreview [eventObjFromParent]=conference></eventpreview>
    `
    
})
export class EventsListComponent {

    @Input('strInputVarFromEventsAppComponent') strInputVarfromParentEventsAppComponent: string;

    conference: any = {
        name: 'Angular Seattle Fest Conference!'
    }

    constructor() {
        
    }
}
