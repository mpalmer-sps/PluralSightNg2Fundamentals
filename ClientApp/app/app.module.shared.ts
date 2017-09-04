import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { EventsAppComponent } from './components/events/events-app.component';
import { EventsListComponent } from './components/events/events-list.component';
import { EventThumbnailComponent } from './components/events/event-thumbnail.component';
import { NavBarComponent } from "./components/nav/navbar.component";
import { EventService } from "./components/shared/event.service";
import { EventDetailComponent } from "./components/events/event-details.component";
import { CreateEventComponent } from "./components/events/create-event.component";

// toastr portion
import { ToastModule } from "ng2-toastr/ng2-toastr";
import { ToastrService } from "./components/shared/toastr.service";

// shared components
import { Error404Component } from "./components/shared/404.component";
import { EventRouteActivator } from "./components/events/event-route-activator.service";



@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailComponent,
        NavBarComponent,
        CreateEventComponent,
        Error404Component
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,        
        ToastModule.forRoot(),        
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'events/new', component: CreateEventComponent },
            { path: 'events', component: EventsListComponent },
            { path: 'events/:id', component: EventDetailComponent, canActivate: [EventRouteActivator] },
            { path: '404', component: Error404Component },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [
        ToastrService,
        EventService,
        EventRouteActivator
    ]
})
export class AppModuleShared {
}
