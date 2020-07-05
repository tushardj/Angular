import { Component } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';
import { passwordValidator } from './shared/password.validator';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  get userName(){
    return this.registrationForm.get('userName');
  }
  constructor( private fb: FormBuilder, private _registrationService : RegistrationService)  {}
  registrationForm = this.fb.group({
    userName: [ '', [ Validators.required, Validators.minLength(5), forbiddenNameValidator(/admin/) ] ],
    password: [''],
    confirmPassword:[''],
  }, { validators: passwordValidator});

  onSubmit(){
    this._registrationService.register(this.registrationForm.value)
    .subscribe(
      response => console.log(Response),
      error=> console.log(error)
    )
    // console.log(this.registrationForm.value);
  }
}
