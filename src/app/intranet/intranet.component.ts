import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../extranet/navbar/navnar.component';

@Component({
    standalone: true,
    imports: [RouterOutlet, NavBarComponent],
    selector: '',
    templateUrl: 'intranet.component.html'
})

export class IntranetComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}