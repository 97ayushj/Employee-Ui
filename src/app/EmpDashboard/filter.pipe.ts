import { Pipe, PipeTransform } from "@angular/core";
import { Employee } from "../Employee";

@Pipe({
    name: 'filterNamePipe'
  })
export default class FilterNamePipe implements PipeTransform{
    transform(employees: Employee[],filterName: string, filterGender: string, filterDepartment: string, filterId: string ) {
        let employees1: Employee[] = employees;

        if(filterName !== ''){
            employees1 = employees1.filter((emp) => 
            {
               return emp.name?.toLowerCase() === filterName.toLowerCase() 
            })
        }

        if(filterGender !== ''){
            employees1 = employees1.filter((emp) => 
            {
               return emp.gender?.toLowerCase() === filterGender.toLowerCase() 
            })
        }

        if(filterDepartment !== ''){
           employees1 = employees1.filter((emp) => 
           {
              return emp.department?.toLowerCase() === filterDepartment.toLowerCase() 
           })
       }

       if(filterId !== ''){
            employees1 = employees1.filter((emp) => 
            {
            return  emp.id?.toString() === filterId
            })
        }

        return employees1;
    }
    
}