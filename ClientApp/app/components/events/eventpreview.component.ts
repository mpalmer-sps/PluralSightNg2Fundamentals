import { Component, Input } from '@angular/core';

@Component({
    selector: 'eventpreview',
    templateUrl: './eventpreview.component.html'
})
export class EventPreviewComponent {

    @Input('eventObjFromParent') event: any;
    
    constructor() {

    }
}