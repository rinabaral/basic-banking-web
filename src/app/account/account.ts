import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../components/navigation/navigation';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, NavigationComponent],
  templateUrl: './account.html',
  styleUrl: './account.scss'
})
export class AccountComponent implements OnInit {
  accountInfo = {
    accountNumber: '1234567890',
    accountType: 'Savings',
    balance: 25000.00,
    currency: 'USD',
    status: 'Active'
  };

  recentTransactions = [
    { id: 1, type: 'Credit', amount: 5000, description: 'Salary Deposit', date: '2024-01-15' },
    { id: 2, type: 'Debit', amount: -150, description: 'ATM Withdrawal', date: '2024-01-14' },
    { id: 3, type: 'Credit', amount: 2000, description: 'Transfer Received', date: '2024-01-13' }
  ];

  constructor() {}

  ngOnInit(): void {}
} 