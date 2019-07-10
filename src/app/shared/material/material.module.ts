import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule
  ],
  exports: [MatSidenavModule, MatToolbarModule, MatIconModule, FlexLayoutModule]
})
export class MaterialModule { }
