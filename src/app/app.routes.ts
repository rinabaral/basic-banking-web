import { Routes } from '@angular/router';
import {  DashboardComponent } from './dashboard/dashboard';
import { LoginComponent } from './login/login';
import { AccountComponent } from './account/account';
import { TransactionsComponent } from './transactions/transactions';
import { CardsComponent } from './cards/cards';
import { UsersComponent } from './users/users';
import { AppRoute } from './constants/app-route';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { 
    path: AppRoute.DASHBOARD, 
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'account', 
    component: AccountComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'transactions', 
    component: TransactionsComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'cards', 
    component: CardsComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'users', 
    component: UsersComponent,
    canActivate: [AuthGuard]
  }
];
