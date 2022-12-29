import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ContentChild,
  AfterContentInit,
  AfterViewInit,
  ContentChildren,
  QueryList,
  ViewChild, ViewChildren, ChangeDetectorRef, ElementRef
} from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import {User} from "./auth-form.interface";
import { AuthRememberComponent} from "./auth-remember.component";
import { AuthMessageComponent} from "./auth-message";

@Component({
  selector: 'app-auth-form',
  template: `
    <div>
        <form form="form" (submit)="onSubmit(form.value)">
            <ng-content select="h3"></ng-content>
<!--            <h3>My Form</h3>-->
<!--            <h3>Create account</h3>-->
            <label>
                Email address
                <input type="email" name="email" ngModel #email>
            </label>
            <label>
                Password
                <input type="password" name="password" ngModel>
            </label>
            <ng-content select="app-auth-remember"></ng-content>
            <auth-message [style.display]="(showMessage ? 'inherit' : 'none')"></auth-message>
<!--            <auth-message [style.display]="(showMessage ? 'inherit' : 'none')"></auth-message>-->
<!--            <auth-message [style.display]="(showMessage ? 'inherit' : 'none')"></auth-message>-->
<!--            <div *ngIf="showMessage">-->
<!--              You will be logged in for 30 days-->
<!--            </div>-->
            <ng-content select="button"></ng-content>
<!--            <button type="submit">-->
<!--                Submit-->
<!--            </button>-->
        </form>
    </div>
  `,
  styles: [`
    .email { border-color: #9f72e6; }
  `]
  // styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  // @ContentChild(AuthRememberComponent) remember: AuthRememberComponent | undefined;
  @ContentChildren(AuthRememberComponent) remember!: QueryList<AuthRememberComponent>;

  @ViewChildren(AuthMessageComponent) message!: QueryList<AuthMessageComponent>;
  // @ViewChild(AuthMessageComponent) message!: AuthMessageComponent;
  @ViewChild('email') email!: ElementRef;
  public form: FormGroup;

  public showMessage!: boolean;
  constructor(
    private cd: ChangeDetectorRef,
  ) {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    })
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
    return false;
  }

  ngAfterContentInit() {

    if (this.remember) {
      this.remember.forEach((item) => {
        item.checked.subscribe((checked: boolean) => this.showMessage = checked);
      });
      console.log('2 this.remember', this.remember);
      // this.remember.checked.subscribe((checked: boolean) => {
      //   this.showMessage = checked;
      // })
    }
    console.log('this.remember', this.remember);
  }

  ngAfterViewInit() {
    this.email.nativeElement.setAttribute('placeholder', 'Enter your email address');
    this.email.nativeElement.classList.add('email');
    this.email.nativeElement.focus;
    console.log('this.email.nativeElement', this.email.nativeElement);
    if (this.message) {
      // setTimeout(() => {
        this.message.forEach((message) => {
          message.days = 30;
        })
      // })
    }
    this.cd.detectChanges();
    // this.message.days = 30;
    console.log('this.message', this.message);
  }
}
