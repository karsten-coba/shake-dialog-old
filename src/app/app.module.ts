import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatDialogModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MainComponentComponent } from './main-component/main-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    MainComponentComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule, 
    MatDialogModule,
    MatButtonModule, 
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
