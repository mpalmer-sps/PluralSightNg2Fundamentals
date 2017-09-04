import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    templateUrl: './create-event.component.html'
})
export class CreateEventComponent {
    // properties
    // this is used for checking if the FORM is filled out or not
    isDirty: boolean = true;

    constructor(private router:Router) {

    }

    cancelCreate() {
        this.router.navigate(['/events']);
    }
}
