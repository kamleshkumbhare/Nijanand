import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components Routing
import { ContactComponent } from '../app/components/contact/contact.component'
import { HomeComponent } from '../app/components/home/home.component'
import { AboutComponent } from '../app/components/about/about.component'
import { ProductComponent } from '../app/components/Product/product.component'
import { GlobalPresenceComponent } from '../app/components/global-presence/global-presence.component'

//Sub Product ROuting
import { CPVCComponent } from '../app/components/Product/cpvc/cpvc.component'
import { PortfolioComponent } from '../app/components/portfolio/portfolio.component'

const routes: Routes = [{
  path: '',
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
},
{
  path: 'global',
  component: GlobalPresenceComponent,
},
{
  path: 'cpvc',
  component: CPVCComponent,
},
{
  path: 'p',
  component: PortfolioComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
