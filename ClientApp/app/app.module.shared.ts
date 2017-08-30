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

import { ToastModule } from "ng2-toastr/ng2-toastr";


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
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
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [
        EventService
    ]
})
export class AppModuleShared {
}
