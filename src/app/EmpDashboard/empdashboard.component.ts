import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-empdashboard',
  templateUrl: './empdashboard.component.html',
  styleUrls: ['./empdashboard.component.css']
})
export class EmpdashboardComponent implements OnInit{
  ngOnInit(): void {}

  employees: Employee[] = [];
  filterGender: string = '';
  filterName: string ='';
  filterId: string = '';
  filterDepartment: string='';
  
  constructor(private httpClient: HttpClient){
    //this.employees = [
    //  {id:1,name:"Ayush",gender:"M",department:"S"},
    //  {id:2,name:"Aryan",gender:"M",department:"P"},
    //  {id:3,name:"Aditya",gender:"T",department:"S"}
    //]
  }

  get(): Observable<any>{
    return this.httpClient.get("http://localhost:8086/getemployees");
    console.log("Making Post request" );
    
  }
  onClick(){
    this.get().subscribe(data =>{
      this.employees = data;
    })
    console.log("On click is triggred")
  }
 
}
