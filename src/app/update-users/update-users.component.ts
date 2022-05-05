import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.css']
})
export class UpdateUsersComponent implements OnInit {
  public users: any = [];
  displayedColumns: string[] = ['Id', 'Name', 'Role'];
  constructor(
    private userService: UserService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.onGetUsers();
  }

  cadastroForm = this.formBuilder.group({
    id: '',
    name: '',
    role: ''
 });

 onTrySubmit(): void {}

 onGetUsers(): void {
    this.userService.getUsers().subscribe(
      (response) => {
        console.log(response);
        this.users = response;
      }
    )
  }
nameInput!: string;
roleInput!: string;
idLabel!: string;
sendToSideForm(row: any): void {
  console.log(row);
  this.nameInput = '';
  this.roleInput = '';
  this.idLabel = row.id;
  this.cadastroForm.setValue(row);
  } 

  onUpdateUsers(): void {
    console.log(this.cadastroForm.value);
    this.userService.updateUser(this.cadastroForm.value).subscribe(
      (response) => {
        console.log(response);
        //this.users = response;
        this.onGetUsers();
      }
    )
    }
}


