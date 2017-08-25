import { Component, Input } from '@angular/core';

@Component({
    selector: 'events-list',
    template: `        
        <h1>Upcoming Angular 2+ events</h1>
        <hr/>
        <event-thumbnail [eventObjFromParent]=conference></event-thumbnail>
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

    constructor() {
        
    }
}
