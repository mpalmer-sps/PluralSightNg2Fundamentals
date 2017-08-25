import { Component, Input } from '@angular/core';

@Component({
    selector: 'events-list',
    template: `        
        <h1>Upcoming Angular 2+ events</h1>
        <hr/>
        <event-thumbnail 
            #thumbnail 
            (eventClickFromChild)="handleChildEventClicked($event)" 
            [eventObjFromParent]=conference>
        </event-thumbnail>
        <h4>{{thumbnail.businessTime}}</h4>
        <button class="btn btn-primary" (click)="thumbnail.logFoo()">Variable Ref to Thumbnail</button>
    `
    
})
export class EventsListComponent {

    conference: any = {
        name: 'Angular Seattle Fest Conference!',
        id: 1,
        date: '9/26/2017',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/app/assets/images/angularconnect-shield.png',
        location: {
            address: '18007 115th St Ct E',
            city: 'Bonney Lake',
            country: 'USA'
        }
    }

    handleChildEventClicked(message: string): void {
        console.log('received from child: ', message);
    }

    constructor() {
        
    }
}
