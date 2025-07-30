import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.scss'
})
export class CardsComponent implements OnInit {
  cards = [
    {
      id: 1,
      cardNumber: '**** **** **** 1234',
      cardType: 'Credit',
      cardName: 'Visa Platinum',
      expiryDate: '12/25',
      status: 'Active',
      balance: 5000,
      limit: 10000
    },
    {
      id: 2,
      cardNumber: '**** **** **** 5678',
      cardType: 'Debit',
      cardName: 'Mastercard Debit',
      expiryDate: '08/26',
      status: 'Active',
      balance: 2500,
      limit: 5000
    },
    {
      id: 3,
      cardNumber: '**** **** **** 9012',
      cardType: 'Credit',
      cardName: 'American Express',
      expiryDate: '03/27',
      status: 'Blocked',
      balance: 0,
      limit: 15000
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  get activeCardsCount(): number {
    return this.cards.filter(c => c.status === 'Active').length;
  }

  get totalCreditLimit(): number {
    return this.cards
      .filter(c => c.cardType === 'Credit')
      .reduce((sum, c) => sum + c.limit, 0);
  }

  getCardStatusClass(status: string): string {
    return status === 'Active' ? 'status-active' : 'status-blocked';
  }
} 