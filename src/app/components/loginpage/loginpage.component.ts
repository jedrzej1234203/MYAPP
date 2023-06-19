import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent {

  handlingError:string = '';
  flag:boolean = true;

  constructor(private fb: FormBuilder, private readonly aS:AuthService, private router: Router) {}
  loginForm: FormGroup = this.fb.group({
    email: [
      '',
      { validators: [Validators.required, Validators.email] },
    ],
    password: [
      '',
      { validators: [Validators.required, Validators.minLength(5)] },
    ],
  });

  loginBtn(){
    this.handlingError = '';
    this.flag = true;
    this.aS.loggingIn(this.loginForm.value.email, this.loginForm.value.password);
    if(!this.aS.isLoggedIn){
      this.handlingError = 'basic red'
      this.flag = false;
    }
    if(this.aS.isLoggedIn){
    this.router.navigate(['flightres'])
    }
  }

  
}
