import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '../app/components/contact/contact.component'
import { HomeComponent } from '../app/components/home/home.component'

const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
},
{
  path: 'Con',
  component: ContactComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
