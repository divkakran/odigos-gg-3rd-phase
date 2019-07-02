import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EasyBookingComponent } from './easy-booking.component';
import { routes } from './easy-booking.route';

@NgModule({
  imports: [
    CommonModule , FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EasyBookingComponent]
})
export class EasyBookingModule { }
