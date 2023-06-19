import { Component } from '@angular/core';
import { DataShareService } from 'src/app/services/data-share.service';

@Component({
  selector: 'app-podsumowanie',
  templateUrl: './podsumowanie.component.html',
  styleUrls: ['./podsumowanie.component.css'],
})
export class PodsumowanieComponent {
  constructor(private sharing: DataShareService) {}
  podsumowanie: any = this.sharing.sharedData;
  seats = this.sharing.seats;
  kwota: number = this.podsumowanie.kwota;
  bagaze = this.sharing.bagaze;

}
