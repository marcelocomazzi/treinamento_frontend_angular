import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "../navbar/navnar.component";

@Component({
    standalone: true,
    imports: [NavBarComponent, NavBarComponent],
    selector: '',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}