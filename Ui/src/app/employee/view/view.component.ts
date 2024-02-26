import { Component } from '@angular/core';
import { APIServicesService } from '../../apiservices.service';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {

listArray:any=[];
  constructor (private getAPI:APIServicesService){


  }

  ngOnInit()
  {
    this.getAPI.GetAllEmployeeList().subscribe((res:any)=>
      {
        this.listArray=Object.values(res);
        console.log(res);

      })
  }

}
