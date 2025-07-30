import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.html',
  styleUrl: './users.scss'
})
export class UsersComponent implements OnInit {
  users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '+1 (555) 123-4567',
      accountType: 'Savings',
      status: 'Active',
      lastLogin: '2024-01-15 10:30 AM'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '+1 (555) 987-6543',
      accountType: 'Checking',
      status: 'Active',
      lastLogin: '2024-01-14 02:15 PM'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike.johnson@email.com',
      phone: '+1 (555) 456-7890',
      accountType: 'Business',
      status: 'Suspended',
      lastLogin: '2024-01-10 09:45 AM'
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      email: 'sarah.wilson@email.com',
      phone: '+1 (555) 321-0987',
      accountType: 'Premium',
      status: 'Active',
      lastLogin: '2024-01-15 11:20 AM'
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  get activeUsersCount(): number {
    return this.users.filter(u => u.status === 'Active').length;
  }

  get suspendedUsersCount(): number {
    return this.users.filter(u => u.status === 'Suspended').length;
  }

  getStatusClass(status: string): string {
    return status === 'Active' ? 'status-active' : 'status-suspended';
  }

  getAccountTypeClass(type: string): string {
    switch(type) {
      case 'Premium': return 'type-premium';
      case 'Business': return 'type-business';
      case 'Savings': return 'type-savings';
      default: return 'type-checking';
    }
  }
} 