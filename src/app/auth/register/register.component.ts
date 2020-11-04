import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onRegister(f: NgForm) {
    console.log(`Username : ${f.value.username}
    Password : ${f.value.password}`);

    this.authService.register(f.value.username,f.value.password);

  }

}
