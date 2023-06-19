import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { StartComponent } from './components/start/start.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightresComponent } from './components/flightres/flightres.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { BagazMiejsceBiletComponent } from './components/flightres/bagaz-miejsce-bilet/bagaz-miejsce-bilet.component';
import { PodsumowanieComponent } from './components/flightres/podsumowanie/podsumowanie.component';
import { WalutyPipe } from './pipe/waluty.pipe';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    LoginpageComponent,
    FlightresComponent,
    BagazMiejsceBiletComponent,
    PodsumowanieComponent,
    WalutyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }
