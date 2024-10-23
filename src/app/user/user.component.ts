import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
export const DUMMY_USERS = [
  {
    id: 'u1',
    name: 'Maria Silva',
    avatar: 'user-1.jpg',
  },
  {
    id: 'u2',
    name: 'Catarina Morgado',
    avatar: 'user-2.jpg',
  },
  {
    id: 'u3',
    name: 'Marcos Paulo',
    avatar: 'user-3.jpg',
  },
  {
    id: 'u4',
    name: 'José Moura',
    avatar: 'user-4.jpg',
  },
  {
    id: 'u5',
    name: 'Carla Souza',
    avatar: 'user-5.jpg',
  },
  {
    id: 'u6',
    name: 'Arthur Vale',
    avatar: 'user-6.jpg',
  },
  {
    id: 'u7',
    name: 'Pedro Careca',
    avatar: 'user-1.jpg',
  }
];
