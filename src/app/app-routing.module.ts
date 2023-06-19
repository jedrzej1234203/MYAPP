import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { FlightresComponent } from './components/flightres/flightres.component';
import { authGuard } from './guard/auth.guard';
import { BagazMiejsceBiletComponent } from './components/flightres/bagaz-miejsce-bilet/bagaz-miejsce-bilet.component';
import { PodsumowanieComponent } from './components/flightres/podsumowanie/podsumowanie.component';



const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'start', component: StartComponent },
  { path: 'login', component: LoginpageComponent },
  {
    path: 'flightres',
    canActivate: [authGuard],
    component: FlightresComponent,
  },
  {path:'rezerwacja', component: BagazMiejsceBiletComponent},
  {path:'podsumowanie', component: PodsumowanieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
