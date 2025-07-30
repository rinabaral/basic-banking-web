import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor() {
    // Check if user is already authenticated on app start
    this.checkAuthStatus();
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const test = 'test';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }

  private getLocalStorageItem(key: string): string | null {
    if (this.isLocalStorageAvailable()) {
      return localStorage.getItem(key);
    }
    return null;
  }

  private setLocalStorageItem(key: string, value: string): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem(key, value);
    }
  }

  private removeLocalStorageItem(key: string): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem(key);
    }
  }

  private checkAuthStatus(): void {
    const token = this.getLocalStorageItem('authToken');
    const isAuthenticated = !!token;
    this.isAuthenticatedSubject.next(isAuthenticated);
  }

  login(token: string, username: string): void {
    this.setLocalStorageItem('authToken', token);
    this.setLocalStorageItem('username', username);
    this.isAuthenticatedSubject.next(true);
  }

  logout(): void {
    this.removeLocalStorageItem('authToken');
    this.removeLocalStorageItem('username');
    this.isAuthenticatedSubject.next(false);
  }

  getToken(): string | null {
    return this.getLocalStorageItem('authToken');
  }

  getUsername(): string | null {
    return this.getLocalStorageItem('username');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
} 