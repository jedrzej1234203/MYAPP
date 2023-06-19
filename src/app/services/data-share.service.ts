import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataShareService {
  sharedData: any;
  seats:any;
  bagaze:any;
  cennik = {
    Krakow: 200,
    Tokyo: 2400,
    Glasgow: 280,
    bagaz: 120,
    miejsce: 45,
  };

  constructor() {}
}
