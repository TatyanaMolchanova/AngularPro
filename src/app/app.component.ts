import { Component } from '@angular/core';
import {User} from "./auth-form/auth-form.interface";

@Component({
  selector: 'app-root',
  template: `
    <div>
<!--      <app-auth-form (submitted)="createUser($event)">-->
<!--         <h3>Create account</h3>-->
<!--         <button type="submit">-->
<!--           Join us-->
<!--         </button>-->
<!--      </app-auth-form>-->
      <app-auth-form (submitted)="loginUser($event)">
        <h3>Login</h3>
        <app-auth-remember (checked)="rememberUser($event)" class="remember"></app-auth-remember>
        <app-auth-remember (checked)="rememberUser($event)" class="remember"></app-auth-remember>
        <app-auth-remember (checked)="rememberUser($event)" class="remember"></app-auth-remember>
        <button type="submit">
          Login
        </button>
      </app-auth-form>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rememberMe: boolean = false;

  createUser(user: User) {
    console.log('Create account: ', user);
  }

  loginUser(user: User) {
    console.log('Login: ', user, this.rememberMe);
  }

  rememberUser(remember: boolean) {
    this.rememberMe = remember;
  }
}
