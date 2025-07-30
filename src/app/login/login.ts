import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppRoute } from '../constants/app-route';

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
  isLoading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private authService: AuthService,
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
    if (this.loginForm.invalid) {
      return;
    }
    
    this.isLoading = true;
    this.errorMessage = '';
    
    const { username, password } = this.loginForm.value;
    this.loginService.login(this.loginForm.value).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.httpStatus === 'OK') {
          this.authService.login(response.data.token, response.data.username);
          this.router.navigate([AppRoute.DASHBOARD]);
        } else {
          this.errorMessage = response.message;          
        }
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Login error', err);
        this.errorMessage = 'An error occurred while logging in.';
      }
    });
  }
}