import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { LoginComponent } from './login';
import { ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { platformBrowserDynamic } from '../../node_modules/@angular/platform-browser-dynamic';
// import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent
  
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    
       
        // routing,
    RouterModule.forRoot([
      { path: 'welcome', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
  ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
