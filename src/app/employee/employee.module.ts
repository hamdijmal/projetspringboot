import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeService } from './employee.service';
import { CommonModule } from '@angular/common';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';



const routes: Routes = [{
  path: '',
  component: EmployeeComponent
}, {
  path: 'add',
  component: AddEmployeeComponent
}, {
  path: 'update/:id',
  component: UpdateEmployeeComponent
}
]

@NgModule({
  declarations: [
    EmployeeComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    EmployeeService
  ],
  exports: [RouterModule]
})
export class EmployeeModule { }
