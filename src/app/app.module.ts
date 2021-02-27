import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductModule } from './products/product.module';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule, // every browser application should import this. Registersimportant service providers like error handling. 
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' }, // no route
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' } // wild card route
    ]),
    ProductModule // imported the newly created product module
  ],
  bootstrap: [AppComponent] // Starting component for the app
})
export class AppModule { }
