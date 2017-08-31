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


// toastr portion
import { ToastModule } from "ng2-toastr/ng2-toastr";
import { ToastrService } from "./components/shared/toastr.service";


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailComponent,
        NavBarComponent        
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,        
        ToastModule.forRoot(),        
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'events', component: EventsListComponent },
            { path: 'events/:id', component: EventDetailComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [
        ToastrService,
        EventService
    ]
})
export class AppModuleShared {
}
