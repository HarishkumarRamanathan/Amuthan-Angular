import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ManageAirlinesComponent } from '../manage-airlines/manage-airlines.component';
import { ManageDiscountComponent } from '../manage-discount/manage-discount.component';
import { ManageScheduleComponent } from '../manage-schedule/manage-schedule.component';
import { AdminGuard } from 'src/app/gaurd/admin.guard';
import { AddEditCouponComponent } from '../manage-discount/add-edit-coupon/add-edit-coupon.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/manageAirline', pathMatch: 'full'
  },
  {
    path: 'manageDiscount',
    component: ManageDiscountComponent,canActivate:[AdminGuard]
  },
  {
    path: 'manageAirline',
    component: ManageAirlinesComponent,canActivate:[AdminGuard]
  },
  {
    path: 'manageAirline/:id',
    component: ManageAirlinesComponent,canActivate:[AdminGuard]
  }, {
    path: 'addEditDiscount',
    component: AddEditCouponComponent,canActivate:[AdminGuard]
  },
  {
    path: 'addEditDiscount/:id',
    component: AddEditCouponComponent,canActivate:[AdminGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminModule { }
