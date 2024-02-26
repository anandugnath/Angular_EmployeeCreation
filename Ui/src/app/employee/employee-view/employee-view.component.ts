import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { APIServicesService } from '../../apiservices.service';
import { NgxPaginationModule } from 'ngx-pagination';
 
@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent {

  listArray: any = [];
  listArrayWithoutFilter: any = [];
  ModalTitle: string = '';
  ActivateAddEditEmpComp: boolean = false;
  emp: any;
  EmployeeNameFilter:string='';

  
  pagedItems: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5; 

  constructor(private getAPI: APIServicesService, private router: Router) {} // Inject Router

  ngOnInit() {
    this.refreshEmpList();
    // this.getAPI.GetAllEmployeeList().subscribe((res: any) => {
    //   this.listArray=this.listArrayWithoutFilter=res = Object.values(res);
    // });
  }

  addClick() {
    this.emp = {
      EmployeeId: 0,
      FirstName: '',
      LastName: '',
      DepartmentID: '',
      email: '',
      DOB: '',
      ProfilePicture: 'anonymous.png'
    };
    this.ModalTitle = 'Add Employee';
    this.ActivateAddEditEmpComp = true;
  }

  navigate() {
    this.router.navigate(['add-edit']); // Use router to navigate
  }

  closeClick() {
    this.ActivateAddEditEmpComp = false;
    this.ngOnInit();
  }

  
  refreshEmpList(){
    this.getAPI.GetAllEmployeeList().subscribe(res=>{
      this.listArray=res;
      this.listArrayWithoutFilter=res;
      this.pagedItems = this.listArray.slice(0, this.itemsPerPage);
    });
  }

  EmpListWithFilter() {
    const nameFilter = this.EmployeeNameFilter.toLowerCase().trim();
    if (!nameFilter) {
     
      this.listArray = this.listArrayWithoutFilter;
      return;
    }
  console.log(nameFilter);
   
    this.listArray = this.listArrayWithoutFilter.filter((item: any) => {
      if (item.firstName !== undefined && item.firstName !== null) {

        console.log("Success");
        return item.firstName.toLowerCase().includes(nameFilter);

      } else {
        console.log("Inside else condition");
        return false;
      }
    });
  }

  
  pageChanged(event: any) {
    this.currentPage = event;
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage, this.listArray.length);
    this.pagedItems = this.listArray.slice(startIndex, endIndex);
  }


  

}
