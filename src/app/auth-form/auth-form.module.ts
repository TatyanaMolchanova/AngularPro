import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './auth-form.component';
import {AuthRememberComponent} from "./auth-remember.component";
import {AuthMessageComponent} from "./auth-message";



@NgModule({
    declarations: [
      AuthFormComponent,
      AuthRememberComponent,
      AuthMessageComponent,
    ],
  exports: [
    AuthFormComponent,
    AuthRememberComponent
  ],
    imports: [
        CommonModule
    ]
})
export class AuthFormModule { }
