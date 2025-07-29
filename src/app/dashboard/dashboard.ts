import { Component, inject, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class DashboardComponent implements OnInit {

  private dashboardService = inject(DashboardService)
  message: string = '';

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
}