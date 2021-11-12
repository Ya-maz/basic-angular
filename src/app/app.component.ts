import { Component } from '@angular/core';
import { User } from './models/user.model';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic';

  name: string = '';
  age: number | null = null;

  users: User[] = [];

  constructor(private userServices: UserService) {
    this.users = this.userServices.getUsers();
    console.log(this.users)
  }

  addUser(): void {
    this.users.push(new User(this.name, this.age))
    this.clearUser()
  }
  clearUser():void {
    this.name = '';
    this.age = null;
  }
}
