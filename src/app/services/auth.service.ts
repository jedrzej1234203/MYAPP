import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  dane: any;
  isLoggedIn: boolean = false;

  private jsonURL = 'assets/users.json';
  constructor(private http: HttpClient) {
    this.getJSON().subscribe((data) => {
      this.dane = data.users;
    });
  }
  getJSON(): Observable<any> {
    return this.http.get(this.jsonURL);
  }

  loggingIn(email: string, password: string): boolean {
    if (this.dane[0].email === email && this.dane[0].password === password) {
      this.isLoggedIn = true;
    }

    return this.isLoggedIn;
  }
  
}
