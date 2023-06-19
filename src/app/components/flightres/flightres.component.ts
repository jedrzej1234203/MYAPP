import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataShareService } from 'src/app/services/data-share.service';

@Component({
  selector: 'app-flightres',
  templateUrl: './flightres.component.html',
  styleUrls: ['./flightres.component.css'],
})
export class FlightresComponent {
  daneZamowienia = {
    start: '',
    cel: '',
    data: '',
    pasazerowie: 0,
  };


  constructor(
    public sharing: DataShareService,
    private fb: FormBuilder,
    private router: Router,
    public auth: AuthService
  ) {}
  today = new Date();
  canActivate() {
    return !this.auth.isLoggedIn;
  }
  

  rezerwacja: FormGroup = this.fb.group({
    miastoStartu: ['Berlin'],
    miastoDocelowe: ['Krakow'],
    data: [],
    iloscPasazerow: [1],
  });

  navigateFun(param: string) {
    this.daneZamowienia.start = this.rezerwacja.value.miastoStartu;
    this.daneZamowienia.cel = this.rezerwacja.value.miastoDocelowe;
    this.daneZamowienia.data = this.rezerwacja.value.data;
    this.daneZamowienia.pasazerowie = this.rezerwacja.value.iloscPasazerow;
    this.sharing.sharedData = this.daneZamowienia;
    this.router.navigate([param]);
  }
  loginNav() {
    this.router.navigate(['login']);
  }
}
