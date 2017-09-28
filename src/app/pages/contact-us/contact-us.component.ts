import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  message: any = {};

  constructor(
    private routerThang: Router
  ) { }

  ngOnInit() {
  }

  submitMessage() {
      alert('Message sent!');

      // redirect user to HOME
      this.routerThang.navigate(['/']);
  }

}
