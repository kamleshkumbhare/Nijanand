import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  public nameValue : any;
  public phoneValue : any;
  public emailValue : any;
  public subjectValue : any;
  public inquiryValue : any;
  public messageValue : any;



  constructor(
    private router : Router,
  ) { }

  ngOnInit(): void {

  

  }

  sendMessage(){
    console.log("?>>>>>>>>>>>>>")
    var contact = {
      "name" : this.emailValue,
      "phone" : this.phoneValue,
      "email" : this.emailValue,
      "sunject" : this.messageValue,
      "inq" : this.inquiryValue,
      "message" : this.messageValue,
    };
    console.log(contact)

  }

}

