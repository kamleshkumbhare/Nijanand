import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CPVCComponent } from './components/Product/cpvc/cpvc.component';
import { HDPEComponent } from './components/Product/hdpe/hdpe.component';
import { PlumbingPipesComponent } from './components/Product/PVC-U/plumbing-pipes/plumbing-pipes.component';
import { ColumnPipesComponent } from './components/Product/PVC-U/column-pipes/column-pipes.component';
import { SWRComponent } from './components/Product/RigidPvc/swr/swr.component';
import { AgriPipesComponent } from './components/Product/RigidPvc/agri-pipes/agri-pipes.component';
import { ProductComponent } from './components/Product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    PortfolioComponent,
    FeedbackComponent,
    FooterComponent,
    HeaderComponent,
    CPVCComponent,
    HDPEComponent,
    PlumbingPipesComponent,
    ColumnPipesComponent,
    SWRComponent,
    AgriPipesComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
