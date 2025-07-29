import { Routes } from '@angular/router';
import { authLoadGuard } from './_guards/auth.guard.fn';
import { LoginComponent } from './extranet/login/login.component';
import { NotFoundComponent } from './extranet/notfound/notfound.component';
import { IntranetComponent } from './intranet/intranet.component';
import { HomeComponent } from './extranet/home/home.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "intranet",
        component: IntranetComponent,
        loadChildren: () => import("./intranet/intranet.routes").then((m) => m.routes),
        canActivate: [authLoadGuard],
    },   
    {
        path: "**",
        component: NotFoundComponent

    },
];
