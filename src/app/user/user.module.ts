import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserComponent, UserListComponent, UserAddComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [UserComponent, UserListComponent, UserAddComponent]
})
export class UserModule { }
