import { Component, OnInit, signal } from '@angular/core';
import { NgbCollapse, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    standalone: true,
    imports: [NgbDropdownModule, NgbCollapse],
    selector: 'harpia-navbar',
    templateUrl: 'navbar.component.html'
})

export class NavBarComponent implements OnInit {

    isCollapsed = signal(false);
    constructor() { }

    ngOnInit() { }
}