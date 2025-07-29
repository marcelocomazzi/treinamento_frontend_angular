import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    imports: [RouterOutlet],
    selector: '',
    templateUrl: 'intranet.component.html'
})

export class IntranetComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}