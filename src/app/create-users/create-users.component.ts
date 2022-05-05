import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder } from '@angular/forms';
import { User } from '../interfaces/user';
import { MatDialog } from '@angular/material/dialog';
import { DialogUsersComponent } from '../dialog-users/dialog-users.component';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {

  public users: any = [];
  displayedColumns: string[] = ['Id', 'Name', 'Role'];
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
    ) { }


  cadastroForm = this.formBuilder.group({
     name: '',
     role: ''
  });

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

  onSubmit(): void {
    console.log(this.cadastroForm.value);
    let Dummy: User = this.cadastroForm.value;
    console.log("Dummy: " + Dummy);
    console.log(Dummy);
    this.userService.createUser(Dummy).subscribe(
      (response) => {
        console.log(response);
        this.onGetUsers();
      }
    )
  }
  
  nameInput!: string;
  roleInput!: string;

  onTrySubmit(): void {
    let name: string = this.cadastroForm.value.name;
    let role: string = this.cadastroForm.value.role;
    if(name != "" && role != "") {
      
      const dialogRef = this.dialog.open(DialogUsersComponent, {
        width: '325px',
        
        data: {name: name, role: role},
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        console.log(result);
        if(result == name) {
          this.onSubmit();
          this.cadastroForm.setValue({
            name: '',
            role: ''
          })
        }
      });
    }
    }
  }


