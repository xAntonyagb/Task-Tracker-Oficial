import { Component } from '@angular/core';
import {DUMMY_USERS} from './dummy-users';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  users = DUMMY_USERS;

  shuffleUsers() {
    for (let i = this.users.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.users[i], this.users[j]] = [this.users[j], this.users[i]];
    }
  }

  onSelectUser() {
    this.shuffleUsers();
  }
}
