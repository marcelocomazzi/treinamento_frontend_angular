import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaisComponent } from './local/pais/pais.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
    },
     {
        path: "local/pais",
        title: "Pais",
        component: PaisComponent,
    },
   
];
