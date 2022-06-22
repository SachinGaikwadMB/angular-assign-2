import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  
  /*Regular Expression for Email and Password validation*/
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  passwordPattern =
    '(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}';

  constructor(
    private formBuilder: FormBuilder,
    private loginService : LoginServiceService,
    private router : Router,
    ) {}
 

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      password: new FormControl('', [Validators.required, Validators.pattern(this.passwordPattern)]),
    });
  }
  
  get f() { return this.loginForm.controls; }

  login() {
    this.submitted = true;
    console.log(this.loginForm.value);
    //this.httpClient.get<any>("http://localhost:3000/login")
    this.loginService.getLoginDetails(this.loginForm.value.email, this.loginForm.value.password); 
  }
}
