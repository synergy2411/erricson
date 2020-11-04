import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
    Validators.minLength(6)
  ]);
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
  }
}
