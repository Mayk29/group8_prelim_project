import { Routes } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';
import { EmplistComponent } from './admin/emplist/emplist.component';
import { ProductComponent } from './admin/product/product.component';
import { PagenotfoundComponent } from './admin/pagenotfound/pagenotfound.component';
import { ContactComponent } from './admin/contact/contact.component';

export const routes: Routes = [
    {path:'emplist', component : EmplistComponent},
    {path:'product', component : ProductComponent},
    {path:'pagenotfound', component: PagenotfoundComponent},
    {path:'contact', component: ContactComponent},
    {path:'', component : HomeComponent }
];
