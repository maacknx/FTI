import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CreateUsersComponent } from './create-users/create-users.component';
import { UpdateUsersComponent } from './update-users/update-users.component';
import { DeleteUsersComponent } from './delete-users/delete-users.component';


const routes: Routes = [

  { path: 'readUsers', component: UserComponent },
  { path: 'createUsers', component: CreateUsersComponent },
  { path: 'updateUsers', component: UpdateUsersComponent },
  { path: 'deleteUsers', component: DeleteUsersComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
