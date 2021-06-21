import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent  {

  public emailValue : any;
  public passwordValue : any;

  constructor(
    private router : Router,
  ) { }

  ngOnInit(): void {
 
  }

  login(){
    console.log(">>>>>>>>>>>>>>>>>");
    var auth = {
      "email" : this.emailValue,
      "password" : this.passwordValue
    };
    if (this.emailValue=="abc@xyz.com" && this.passwordValue=="abc123") {
      console.log(auth)
      localStorage.setItem("email", auth.email);
      localStorage.setItem('password',auth.password);
      this.router.navigate(["/dashboard"])

    } else {
      alert("Wrong User Credentials")
    }
    
  }

}
