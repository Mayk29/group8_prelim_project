import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { HomeComponent } from './admin/home/home.component';
// import { EmplistComponent } from './admin/emplist/emplist.component';
// import { PagenotfoundComponent } from './admin/pagenotfound/pagenotfound.component';
// import { ProductComponent } from './admin/product/product.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prelim-project-group8';
}
