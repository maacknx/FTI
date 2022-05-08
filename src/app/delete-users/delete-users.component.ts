import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-delete-users',
  templateUrl: './delete-users.component.html',
  styleUrls: ['./delete-users.component.css']
})
export class DeleteUsersComponent implements OnInit {

  public users: any = [];
  displayedColumns: string[] = ['Id', 'Name', 'Role', 'Birthday', 'Salary', 'Phone', 'Email', 'Action'];
  constructor(private userService: UserService) { }

  @ViewChild(MatTable) delTable!: MatTable<any>

  ngOnInit(): void {
    this.onGetUsers();
  }


  onGetUsers(): void {
    this.userService.getUsers().subscribe(
      (response) => {
        console.log(response);
        this.users = response;
      }
    )
  }

  onDeleteUser(user: User): void {
    this.userService.deleteUser(user).subscribe(
      (response) => {
        this.onGetUsers();
        console.log(response.name + ' deleted');
        
      }
    )
  }

}
