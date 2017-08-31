import { Component } from '@angular/core';
import { EventService } from "../shared/event.service";

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left:20px; padding-right:20px; }
        .event-image { height:100px; }
    `]
})

export class EventDetailComponent {
    // properties
    event:any;

    constructor(private eventSrv: EventService) { }

    ngOnInit() {
        this.event = this.eventSrv.getEvent(1);
    }
}
