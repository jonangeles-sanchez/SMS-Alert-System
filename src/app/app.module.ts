import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Add this line

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BarComponent } from './components/bar/bar.component';
import { RequestFormComponent } from './components/request-form/request-form.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ShoeFormComponent } from './components/shoe-form/shoe-form.component';
import { ShoeFormSummaryComponent } from './components/shoe-form-summary/shoe-form-summary.component';
import { ShoeFormSubmittedComponent } from './components/shoe-form-submitted/shoe-form-submitted.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BarComponent,
    RequestFormComponent,
    SidebarComponent,
    ShoeFormComponent,
    ShoeFormSummaryComponent,
    ShoeFormSubmittedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
