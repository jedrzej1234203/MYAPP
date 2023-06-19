import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Route, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public aS: AuthService, private router: Router){}
  ngOnInit(){

}
  title = 'airlines';
  loginBtn(){
    if(this.aS.isLoggedIn) return 'LOG-OUT'
    return "LOG-IN"
  }

  loginNav(){
    this.aS.isLoggedIn = false;
    this.router.navigate(['login']);
  }
}
