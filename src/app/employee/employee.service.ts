import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';


const headers = { 'Content-Type': 'application/json' };
@Injectable()
export class EmployeeService {

  apiUrl;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  addEmployee(employee: Object) {
    return this.http.post(this.apiUrl + "company/employee/add", JSON.stringify(employee), { headers: headers });
  }

  

  deleteEmployee(id) {
    return this.http.delete(this.apiUrl + "company/employees/" + id,
      { headers: headers });
  }

  


  getEmployees() {
    return this.http.get(this.apiUrl + "company/employees");
  }


  getEmployee(id) {
    return this.http.get(this.apiUrl + "company/employees/" + id);
  }

  updateEmployee(id,body){
    return this.http.put(this.apiUrl+"company/employees/"+id,body,{headers: headers});
  }
}
