import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './star.component';


// A shared module that import the common components and module and exports them to
// be used in other module. This one is used in the product module.
@NgModule({
  declarations: [
    StarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule
  ]

})
export class SharedModule { }
