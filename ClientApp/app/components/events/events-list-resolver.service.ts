import { Injectable } from '@angular/core';
import { Resolve } from "@angular/router";
import { EventService } from "../shared/event.service";
// this is needed for the map method call - or this whole thing doesn't work
import 'rxjs/add/operator/map';

@Injectable()
export class EventListResolver implements Resolve<any> {


    // this class will call the event service 
    // this will make an async call to the eventservice 
    //
    constructor(private eventService: EventService) {

    }

    // this is used in the router module at this line: { path: 'events', component: EventsListComponent, resolve:{events:EventListResolver },
    // we are passing in an object called 'EventListResolver' and that object has a property called 'events'
    // this is saying "before resolving this route" call this 'EventListResolver'
    // when that resolver finishes and returns some data, add this data to the route as a property named 'events' 
    // the resolve section calls this Component and uses 'events' because that is what is returned
    // this is then returned and consumed in our events-list component
    resolve() {        
        return this.eventService.getEvents().map(events => events)
    }
}
