import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';
import {DUMMY_USERS} from './user/dummy-users';
import {NgForOf} from '@angular/common';
import {TaskComponent} from './task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, NgForOf, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProjetoFrabel';
  users = DUMMY_USERS;

  selectedUser: any;

  onSelectUser(user: any) {
    this.selectedUser = user; // Pra poder passar o user pras tasks
    console.log(`User selected: ${user.name}`);
  }
}
