import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';

import { EventService } from "../shared/event.service";
//import { ToastrService } from "../shared/toastr.service";
import { ToastsManager } from "ng2-toastr/ng2-toastr";

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
    // declare variables
    events: any[];

    // Inject the Event Service Dependency
    constructor(private eventService: EventService, public toastr: ToastsManager, vcr: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    handleChildEventClicked(message: string): void {
        this.toastr.success(message);
    }

    ngOnInit() {
        // never have this in the CTOR - bad idea
        this.events = this.eventService.getEvents();
    }
}
