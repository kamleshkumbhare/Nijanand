import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent  {

  public emailValue : any;
  public passwordValue : any;

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    console.log(">>>>>>>>>>>>>>>>>");
    alert("aksjdhjks")
    var auth = {
      "email" : this.emailValue,
      "password" : this.passwordValue
    };
    console.log(auth)
  }

}
