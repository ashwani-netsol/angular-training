import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  greetUser: string;
  dashboardLandingPage: boolean = false;
  router:any;

  constructor(private _router: Router) {
    this.router = _router;
    
    /**
     * Check if the current route is dashboard page
     */
    this.router.events.subscribe((route) => {
      this.dashboardLandingPage = (this.router.url == '/dashboard');
    });
  }

  ngOnInit() {
  }

}
