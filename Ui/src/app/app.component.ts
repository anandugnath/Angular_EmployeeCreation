import { Component, OnInit } from '@angular/core';
import { APIServicesService } from './apiservices.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit 
{
  title = 'Task';
listArray:any=[];
  constructor(private getAPI:APIServicesService)
  {

  }
  ngOnInit()
  {
    this.getAPI.GetAllEmployeeList().subscribe((res:any)=>{
      this.listArray= Object.values(res);
      console.log(this.listArray);
      if (res['data']!=null) 
      {
       /* console.log(res.data);
        this.listArray= Object.values(res);
        console.log(this.listArray);*/
      }
      else {
        
      }
/*
this.listArray= Object.values(res['data']);
console.log(this.listArray);
*/

    })
  }

  
 

  course:any[]=[
    {id:1,name:"ANANDU"},
    {id:1,name:"AARIV"},
    {id:1,name:"BHISHMA"}
  ]
}
