import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModuleShared } from './app.module.shared';
import { AppComponent } from './components/app/app.component';
import { EventService } from "./components/shared/event.service";
import { ToastModule } from "ng2-toastr/ng2-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

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
        EventService
    ]
})
export class AppModule {
}

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
