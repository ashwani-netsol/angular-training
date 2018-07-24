import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout()
    .then(data => {
      this.authService.setLoggedInStatus(false);
      this.router.navigate(['/']);
    });
  }

}
