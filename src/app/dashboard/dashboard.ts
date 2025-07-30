import { Component, inject, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../components/navigation/navigation';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NavigationComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class DashboardComponent implements OnInit {

  private dashboardService = inject(DashboardService)
  message: string = '';

  dashboardStats = {
    totalBalance: 25000.00,
    monthlyIncome: 5000.00,
    monthlyExpenses: 3200.00,
    savingsRate: 36.0,
    recentTransactions: 12,
    activeCards: 3
  };

  quickActions = [
    { title: 'Transfer Money', icon: '💸', action: 'transfer' },
    { title: 'Pay Bills', icon: '📄', action: 'bills' },
    { title: 'View Statements', icon: '📊', action: 'statements' },
    { title: 'Card Management', icon: '💳', action: 'cards' }
  ];

  recentActivity = [
    { type: 'Credit', amount: 5000, description: 'Salary Deposit', time: '2 hours ago' },
    { type: 'Debit', amount: -150, description: 'ATM Withdrawal', time: '1 day ago' },
    { type: 'Credit', amount: 2000, description: 'Transfer Received', time: '2 days ago' }
  ];

  ngOnInit() {
    // this.getDashboard();
  }

  // getDashboard(){
  // this.dashboardService.getDashboard().subscribe({
  //   next: (data) => {
  //     console.log('Received data:', data);
  //     this.message = data;
  //   },     
  //   error: (err) => console.error('Error fetching dashboard:', err)
  // });
  // console.log(this.message);
  // }

  performAction(action: string): void {
    console.log(`Performing action: ${action}`);
    // Add navigation logic here
  }
}