import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbCollapse, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    standalone: true,
    imports: [RouterLink, NgbDropdownModule, NgbCollapse],
    selector: 'harpia-navbar',
    templateUrl: 'navbar.component.html'
})

export class NavBarComponent implements OnInit {

    isCollapsed = signal(false);
    constructor() { }

    ngOnInit() { }
}