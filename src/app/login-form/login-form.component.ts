import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  shakeIt = false;

  constructor() { }

  ngOnInit() {
  }

  login() {
    this.shakeIt = true;
    setTimeout((arg) => {
      this.shakeIt = false;
    },
    500);
  }
}
