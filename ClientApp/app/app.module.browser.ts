import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModuleShared } from './app.module.shared';
import { AppComponent } from './components/app/app.component';
import { EventService } from "./components/shared/event.service";
import { ToastModule } from "ng2-toastr/ng2-toastr";
import { ToastrService } from "./components/shared/toastr.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EventRouteActivator } from "./components/events/event-route-activator.service";

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,         
        ToastModule.forRoot(),       
        AppModuleShared        
    ],
    providers: [
        { provide: 'BASE_URL', useFactory: getBaseUrl },        
        ToastrService,
        EventService,
        EventRouteActivator
    ]
})
export class AppModule {
}

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
