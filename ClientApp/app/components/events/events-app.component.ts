import { Component } from '@angular/core';

@Component({
    selector: 'eventsapp',
    template: `
        <div>This is a line of text from the Events App Component</div>
        <eventslist [strInputVarFromEventsAppComponent]="strVarfromEventsAppComponent"></eventslist>
    `
})
export class EventsAppComponent {

    strVarfromEventsAppComponent: string = 'This is from the Events App Component';

    constructor() {
    }

}
