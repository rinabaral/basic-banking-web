import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from '../components/navigation/navigation';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, FormsModule, NavigationComponent],
  templateUrl: './transactions.html',
  styleUrl: './transactions.scss'
})
export class TransactionsComponent implements OnInit {
  transactions = [
    { id: 1, type: 'Credit', amount: 5000, description: 'Salary Deposit', date: '2024-01-15', category: 'Income' },
    { id: 2, type: 'Debit', amount: -150, description: 'ATM Withdrawal', date: '2024-01-14', category: 'Withdrawal' },
    { id: 3, type: 'Credit', amount: 2000, description: 'Transfer Received', date: '2024-01-13', category: 'Transfer' },
    { id: 4, type: 'Debit', amount: -75, description: 'Grocery Store', date: '2024-01-12', category: 'Shopping' },
    { id: 5, type: 'Debit', amount: -200, description: 'Utility Bill Payment', date: '2024-01-11', category: 'Bills' },
    { id: 6, type: 'Credit', amount: 1000, description: 'Refund', date: '2024-01-10', category: 'Refund' }
  ];

  selectedFilter = 'all';

  constructor() {}

  ngOnInit(): void {}

  getFilteredTransactions() {
    if (this.selectedFilter === 'all') {
      return this.transactions;
    }
    return this.transactions.filter(t => t.type === this.selectedFilter);
  }

  getTotalAmount() {
    return this.getFilteredTransactions().reduce((sum, t) => sum + t.amount, 0);
  }
} 