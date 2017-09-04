import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { EventService } from "../shared/event.service";

@Injectable()
export class EventRouteActivator implements CanActivate {

    // we need to see if the ID passed in is a valid event
    // We need the ID, to get that we need to grab the route
    // the '+' on route.params casts that id param into a number
    canActivate(route: ActivatedRouteSnapshot) {
        const eventExists = !!this.eventService.getEvent(+route.params['id']);

        if (!eventExists)
        {
            // if the event doesn't come back as valid then redirect to the 404 page
            this.router.navigate(['/404'])
            // the 'canActivate' method needs to return a boolean so return FALSE here
            // this means that the route CANNOT BE ACTIVATED
            return eventExists;
        }

        // if the event exists then return TRUE meaning that the route CAN BE ACTIVATED
        return eventExists;
    }


    // we need the event service to see if this is a valid event
    // so inject that dependency into the CTOR
    // then use the 404 page
    // router is needed to actualy do the navigation
    constructor(private eventService: EventService, private router:Router) {
        
    }
}
