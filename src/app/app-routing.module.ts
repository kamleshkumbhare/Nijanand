import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components Routing
import { ContactComponent } from '../app/components/contact/contact.component'
import { HomeComponent } from '../app/components/home/home.component'
import { AboutComponent } from '../app/components/about/about.component'
import { ProductComponent } from '../app/components/Product/product.component'

const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
},
{
  path: 'contact',
  component: ContactComponent,
},
{
  path: 'about',
  component: AboutComponent,
},
{
  path: 'product',
  component: ProductComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
