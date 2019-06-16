import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  constructor(private dialog: MatDialog) { 
    this.dialog.open(LoginFormComponent, {});
  }
  ngOnInit() {
  }

}
