import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderPageComponent } from './header-page/header-page.component';
import {MatButtonModule} from '@angular/material/button';
import { CreateUsersComponent } from './create-users/create-users.component';
import { UpdateUsersComponent } from './update-users/update-users.component';
import { DeleteUsersComponent } from './delete-users/delete-users.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogUsersComponent } from './dialog-users/dialog-users.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderPageComponent,
    CreateUsersComponent,
    UpdateUsersComponent,
    DeleteUsersComponent,
    DialogUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
