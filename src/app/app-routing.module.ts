import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './pages/employee/employee.component';
import { UserComponent } from './pages/user/user.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  {
    path:'employee',
    component: EmployeeComponent
  },
  {
    path:'user',
    component: UserComponent
  }, 
  {
    path:'product',
    component: ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
