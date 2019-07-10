import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [HomeComponent, NavbarComponent, NotfoundComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [HomeComponent, NavbarComponent, NotfoundComponent]
})
export class CommonsModule { }
