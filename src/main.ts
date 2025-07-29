import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { LoginComponent } from './app/login/login';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';
import 'zone.js';

bootstrapApplication(LoginComponent, {
  providers: [
    // Provide routing configuration
    provideRouter(routes),
    provideHttpClient(),
  ]
}).catch((err) => console.error(err));
