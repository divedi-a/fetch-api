import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormdemoComponent } from './formdemo/formdemo.component';
import { AddremoveclassComponent } from './addremoveclass/addremoveclass.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'formdemo', component:FormdemoComponent},
    {path:'addremoveclass',component:AddremoveclassComponent}
];
