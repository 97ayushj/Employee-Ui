import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpdashboardComponent } from './EmpDashboard/empdashboard.component';
import FilterNamePipe from './EmpDashboard/filter.pipe';
import {HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    EmpdashboardComponent,
    FilterNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
