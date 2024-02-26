import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class APIServicesService {

  constructor(private http:HttpClient) { }
UrL='http://localhost:5219/api/employee';
Url_Department='http://localhost:5219/api/department';
/*https://api.first.org/data/v1/countries */

  GetAllEmployeeList()
  {
    return this.http.get<any>(this.UrL);
  }

  addEmployee(val:any){
    console.log(val);
    console.log("http://localhost:5219/api/employee/Save",val);
    return this.http.post("http://localhost:5219/api/employee/Save",val);
     

  }
  GetAllDepartment()
  {
    return this.http.get<any>(this.Url_Department);
  }

}
