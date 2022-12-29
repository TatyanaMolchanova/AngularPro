import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'app-auth-remember',
  template: `
    <label>
      <input type="checkbox" (change)="onChecked($event.target)">
      Keep me logged in
    </label>
  `,
})
export class AuthRememberComponent {
  @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();

  onChecked(value: any ) {
    this.checked.emit(value.checked);
  }
}
