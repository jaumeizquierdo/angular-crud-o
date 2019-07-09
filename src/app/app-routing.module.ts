import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './commons/home/home.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserComponent } from './user/user/user.component';
import { NotfoundComponent } from './commons/notfound/notfound.component';
import { UserAddComponent } from './user/user-add/user-add.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'user/:id',
    component: UserComponent
  },
  {
    path: 'addUser',
    component: UserAddComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
