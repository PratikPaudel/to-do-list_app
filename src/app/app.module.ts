import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { DashboardComponent } from './component/dashboard/dashboard.component';

/**
 * Main module for our application. If creating any new components, be sure to declare them here.
 * If creating any new services, provide them here.
 */
@NgModule({
  imports: [
    BrowserModule, 
    HttpClientModule, 
    FormsModule
  ],
  declarations: [ 
    HomeComponent,
    HeaderComponent,
    DashboardComponent
  ],
  bootstrap: [
    HomeComponent 
  ]
})
export class AppModule { }