import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers(): User[] {
    return [
      new User('Анвар', 40),
      new User('Зухра', 15),
      new User('Наиля', 23),
      new User('Эльмира', 57),
      new User('Сажида', 3),
      new User('Рашид', 60),
    ]
  }

  constructor() { }
}
