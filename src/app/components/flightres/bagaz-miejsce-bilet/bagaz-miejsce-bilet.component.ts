import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataShareService } from 'src/app/services/data-share.service';

@Component({
  selector: 'app-bagaz-miejsce-bilet',
  templateUrl: './bagaz-miejsce-bilet.component.html',
  styleUrls: ['./bagaz-miejsce-bilet.component.css'],
})
export class BagazMiejsceBiletComponent {
  daneLotu: any;
  cennik: any;
  constructor(public sharing: DataShareService, private router: Router) {}
  pasazerowie: any[] = [];
  siedzenia: string[] = [];
  bagaze: boolean[] = [];
  plane: boolean = false;
  luggage: boolean = false;
  seatCnt: number = 0;
  danePodsumowania = {
    trasa: '',
    seat: false,
    data: '',
    kwota: 0,
  };

  choseSeat() {
    if (this.plane === true) {
      this.plane = false;
    } else {
      this.plane = true;
    }
  }
  dodajBagaz(param: number) {
    if (this.bagaze[param] === true) {
      this.bagaze[param] = false;
    } else {
      this.bagaze[param] = true;
    }
  }

  ngOnInit() {
    this.cennik = this.sharing.cennik;
    this.daneLotu = this.sharing.sharedData;
    for (let i = 0; i < this.daneLotu.pasazerowie; i++) {
      this.pasazerowie.push(this.danePodsumowania);
    }
  }

  takeSeat(param: any) {
    let seat = document.getElementById(param);
    if (this.seatCnt < this.pasazerowie.length) {
      seat?.classList.add('primary');
      this.siedzenia[this.seatCnt] = param;
      this.seatCnt++;
    } else if (seat?.classList.contains('primary')) {
      seat.classList.remove('primary');
      this.seatCnt--;
    }
  }

  wycenaBiletu(cel: string) {
    type ObjectKey = keyof typeof this.sharing.cennik;
    return cel as ObjectKey;
  }

  sumUp() {
    this.pasazerowie.forEach((pasazer) => {
      pasazer.kwota = this.sharing.cennik[this.wycenaBiletu(this.daneLotu.cel)];
      if (this.plane) {
        pasazer.kwota += 45;
      }
      pasazer.trasa = this.daneLotu.cel;
      pasazer.seat = this.plane;
      pasazer.data = this.daneLotu.data;
    });
    this.sharing.bagaze = this.bagaze;
    this.sharing.seats = this.siedzenia;
    this.sharing.sharedData = this.pasazerowie;

    this.router.navigate(['podsumowanie']);
  }
}
