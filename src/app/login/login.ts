import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent{
   loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],  
      password: ['', [Validators.required]]   
    });
  }
   get username() {
    return this.loginForm.controls['username'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }


  onSubmit(): void {
    console.log("Login attempt started...")
    if (this.loginForm.invalid) {
      console.log("Form is invalid")
      return;
    }
    const { username, password } = this.loginForm.value;
    console.log("Form values::::", { username, password });
    this.loginService.login(this.loginForm.value).subscribe({
      next: (response) => {
        debugger;
        if (response.httpStatus === 'OK') {
          localStorage.setItem('authToken', response.data.token);
          localStorage.setItem('username', response.data.username);
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = response.message;          }
      },
      error: (err) => {
        console.error('Login error', err);
        this.errorMessage = 'An error occurred while logging in.';
      }
    });
  }
}