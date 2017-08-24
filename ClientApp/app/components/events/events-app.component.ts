import { Component } from '@angular/core';

@Component({
    selector: 'events-app',
    template: `
        <div>This is a line of text from the Events-App Component</div>
        <events-list [strInputVarFromEventsAppComponent]="strVarfromEventsAppComponent"></events-list>
    `
})
export class EventsAppComponent {

    strVarfromEventsAppComponent: string = 'This is from the Events-App Component';

    constructor() {
    }

}
