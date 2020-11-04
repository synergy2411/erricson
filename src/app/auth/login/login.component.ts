import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = new FormControl('', [
    Validators.email,
    Validators.required
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    this.exclamationMarkValidator
  ]);
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = fb.group({
      username : this.username,
      password : this.password
    });
  }

  ngOnInit() {
  }

  onLogin() {
    console.log(`Username : ${this.loginForm.value.username}`);
    console.log(`Password : ${this.loginForm.value.password}`);
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password);
  }

  exclamationMarkValidator(input: FormControl) {
    const hasExclamation = input.value.indexOf('!') >= 0;
    return hasExclamation ? null : {needExclamation : true};
  }
}
