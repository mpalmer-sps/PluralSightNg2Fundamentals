import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { EventService } from "../shared/event.service";
//import { ToastrService } from "../shared/toastr.service";
import { ToastsManager } from "ng2-toastr/ng2-toastr";


@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
    // declare variables
    events: any;

    // Inject the Event Service Dependency
    constructor(private eventService: EventService, public toastr: ToastsManager, vcr: ViewContainerRef, private route:ActivatedRoute) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    handleChildEventClicked(message: string): void {
        this.toastr.success(message);
    }

    ngOnInit() {
        // never have this in the CTOR - bad idea
        // because the events array is an observable we have to subscribe to the observable
        //this.eventService.getEvents().subscribe(
        //    events => {this.events = events}
        //);

        // now that this is coming from the route we have to add the Router to the CTOR
        // and then GET the data from the route that is coming from the events-list-resolver.service
        // the "events" type matches the retunred data and the route as shown here: { path: 'events', component: EventsListComponent, resolve:{events:EventListResolver },        
        this.events = this.route.snapshot.data['events'];
        console.log('events data has come back');
        console.log(this.events);        
    }
}
