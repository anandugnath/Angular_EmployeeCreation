import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { APIServicesService } from '../../apiservices.service';
import { Router } from '@angular/router';
import { FormBuilder,Validators,FormGroup,FormControl } from '@angular/forms';
  
@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.css'
})
export class AddEditComponent implements OnInit {

  form_validation!: FormGroup;
  constructor(private service:APIServicesService,private router: Router,private formBuilder: FormBuilder){}

   @Input() emp:any;
   EmployeeId:string='0';
   FirstName:string='';
   LastName:string='';
   Email:string='';
   DOB:string='';
   ProfilePicture:string='';
   DepartmentID:string='0'
   DepartmentsList:any=[];
DepartmentName:string='';




   addEmployee(){

    
    var val = {employeeID:this.EmployeeId,
      firstName:this.FirstName,
      lastName:this.LastName,
      email:this.Email,
      dob:this.DOB,
      
      profilePicture:this.ProfilePicture,
      departmentID:this.DepartmentID,
      departmentName:this.DepartmentName
              };
            
if(val.firstName=='')
{
  alert("Please enter First Name");
  return
}
if(val.lastName=='')
{
  alert("Please enter Last Name");
  return
}
if(val.email=='')
{
  alert("Please enter Email");
  return
}
if(val.dob=='')
{
  alert("Please Select DOB");
  return
}

 
    this.service.addEmployee(val).subscribe(res=>{
       
      if (res && (res as any).hasOwnProperty('statusCode') && (res as any)['statusCode'] === "200") {
        alert("Data Saved Successfully");
        this.router.navigate(['/add-edit']);
      }
   
        
       
    
    }
  );
  
  
   }

  
  ngOnInit(): void {
    this.loadDepartmentList();
     
    
    this.form_validation = new FormGroup ({
      firstname : new FormControl(null,Validators.required),
      lastname: new FormControl(null,Validators.required),
      email:new FormControl(null,Validators.required),
      dob:new FormControl(null,Validators.required),
      departmentID:new FormControl(null,Validators.required)
      
    });
  }

  loadDepartmentList(){
    this.service.GetAllDepartment().subscribe((data:any)=>{
      this.DepartmentsList=data;
      
    });
  }

   

}
 