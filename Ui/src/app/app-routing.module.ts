import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AddEditComponent } from './employee/add-edit/add-edit.component';
const routes: Routes = [{path:'employee',component:EmployeeComponent},
{path:'view',component:EmployeeComponent},
{path:'add-edit',component:EmployeeComponent},
{ path: 'employee/add-edit', component: AddEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
