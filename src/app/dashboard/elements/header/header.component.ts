import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private afAuth : AngularFireAuth) {
    console.log('------------');
    console.log(this.afAuth.auth.currentUser);
    console.log('------------');

  }

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
