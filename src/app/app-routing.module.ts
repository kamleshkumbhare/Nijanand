import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components Routing
import { ContactComponent } from '../app/components/contact/contact.component'
import { HomeComponent } from '../app/components/home/home.component'
import { AboutComponent } from '../app/components/about/about.component'
import { GlobalPresenceComponent } from '../app/components/global-presence/global-presence.component'

//Sub Product ROuting
import { CPVCComponent } from '../app/components/Product/cpvc/cpvc.component'
import { PortfolioComponent } from '../app/components/portfolio/portfolio.component'
import { ProductPageComponent } from '../app/components/Product/product-page/product-page.component'

//Login Page
import { LoginPageComponent } from '../app/components/login-page/login-page.component'
import { DashboardComponent } from '../app/components/dashboard/dashboard.component'

//Dashboard Panel
import { AddBlogComponent } from '../app/components/dashboard/add-blog/add-blog.component'

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
},
{
  path: 'productPage',
  component: ProductPageComponent,
},
{
  path: 'login',
  component: LoginPageComponent,
},
{
  path: 'dashboard',
  component: DashboardComponent,
},
{
  path: 'addBlog',
  component: AddBlogComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
