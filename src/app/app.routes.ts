import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaComponent } from './resta/resta.component';
import { SumaComponent } from './suma/suma.component';

export const ROUTES: Routes = [
    {path: "home",component: HomeComponent},
    {path: "suma",component: SumaComponent},
    {path: "resta",component:RestaComponent},
    {path: "**",component: HomeComponent}
];