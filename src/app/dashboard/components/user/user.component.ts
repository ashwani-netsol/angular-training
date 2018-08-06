import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../../core/models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: Observable<User[]>;
  showSpinner: boolean = true;

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
    this.users.subscribe(() => this.showSpinner = false)
  }

  ngOnInit() {
  }

}
