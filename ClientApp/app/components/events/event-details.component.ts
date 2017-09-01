import { Component } from '@angular/core';
import { EventService } from "../shared/event.service";
import { ActivatedRoute } from "@angular/router";

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

    constructor(private eventSrv: EventService, private route:ActivatedRoute) { }

    // the '+' on the parameter casts this to a number
    // the id parameter must match the route map that is set in the app..module
    // in that case this is "{ path: 'events/:id', component: EventDetailComponent },"
    ngOnInit() {
        this.event = this.eventSrv.getEvent(+this.route.snapshot.params['id']);
    }
}
