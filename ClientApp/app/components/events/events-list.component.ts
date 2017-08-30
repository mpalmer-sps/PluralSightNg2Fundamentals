import { Component, Input, OnInit } from '@angular/core';
import { EventService } from "../shared/event.service";

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
    // declare variables
    events: any[];

    // Inject the Event Service Dependency
    constructor(private eventService: EventService) {
        
    }

    handleChildEventClicked(message: string): void {
        console.log('received from child with button click inside child: ', message);
    }

    ngOnInit() {
        // never have this in the CTOR - bad idea
        this.events = this.eventService.getEvents();
    }
}
