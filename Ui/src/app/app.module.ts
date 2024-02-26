import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, withFetch } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';import { provideRouter } from '@angular/router';
 import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeComponent } from './employee/employee.component';
 import { ViewComponent } from './employee/view/view.component';
import { EmployeeVieComponent } from './employee-vie/employee-vie.component';
import { EmployeeViewComponent } from './employee/employee-view/employee-view.component';
import { AddEditComponent } from './employee/add-edit/add-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeVieComponent,
    EmployeeViewComponent,
    AddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule, NgbModule
  ],
  providers: [
    provideHttpClient(withFetch()), provideClientHydration()
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
