import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LogType } from '../interfaces/log-type';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.onGetUsers();
    this.onGetLogs();
    //this.onGetUser(3);
    //this.onCreateUser();
  }
  dataSource: any;
  displayedColumns: string[] = ['Id', 'Name', 'Role', 'Birthday', 'Salary', 'Phone', 'Email', 'Age', 'daysToBirthday'];
  public users: any = [];

  onGetUsers(): void {
    this.userService.getUsers().subscribe(
      (response) => {
        console.log(response);
        this.users = response;
      }
    )
  }

  onGetUser(id: number): void {
    this.userService.getUser(id).subscribe(
      (response) => console.log(response)
    )
  }

  onCreateUser(user: User): void {
    this.userService.createUser(user).subscribe(
      (response) => console.log(response)
    )
  }

  public logs!: LogType[];

  onGetLogs(): void {
    this.userService.getLogs().subscribe(
      (response) => {
        console.log(response);
        this.logs = response;
      }
    )
  }

  getAge(age: Date): number {
    return Math.floor(Math.abs(Date.now() - Date.parse(age.toString())) / 1000 / 60 / 60 / 24 / 365);
  }

  getdaysToBirthday(age: Date): number {
    let idade = (Date.now() - Date.parse(age.toString())) / 1000 / 60 / 60 / 24 / 365;
    console.log('idade: ' + idade);
    let idadeX = idade * 1000 * 60 * 60 * 24;
    console.log('idadex: ' + (idadeX));

    let nextIdade = Math.ceil(idade);

    console.log("next idade: " + nextIdade);
    
    let nextIdadeX = nextIdade * 1000 * 60 * 60 * 24;

    console.log("next idadeX: " + nextIdadeX);

    let daysUntilBirth = (nextIdadeX - idadeX) / 60 / 60 / 24;
    
    console.log('days until: ' + daysUntilBirth);

    return daysUntilBirth;
  }
}
