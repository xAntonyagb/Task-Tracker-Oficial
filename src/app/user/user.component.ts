import {Component, EventEmitter, Input, Output} from '@angular/core';
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
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;

  @Output() select = new EventEmitter<any>();

  onSelectUser() {
    const selectedUser = {id: this.id, name: this.name, avatar: this.avatar};
    this.select.emit(selectedUser);
  }
}

