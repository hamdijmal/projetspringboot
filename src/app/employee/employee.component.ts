import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-emplpyee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {

  employees = [];
  constructor(private employeeService: EmployeeService, private router: Router) {
    this.employeeService.getEmployees().subscribe((res: any) => {
      this.employees = res;
    }, err => console.error("Error from getEmployees: ", err))
  }

  ngOnInit() {
  }

  getIndex(arr, key) {
    let index;
    arr.forEach((element, idx) => {
      console.log()
      if (element.id == key)
        index = idx;
    });
    return index;
  }
  delete(id) {
    this.employeeService.deleteEmployee(id).subscribe((res) => {
      console.log("Employee deleted");
      this.employees.splice(this.getIndex(this.employees, id), 1)
    },
      err => console.error('Error from delete employee: ', err))
  }

  update(id) {
    console.log('update: ', id);
    this.router.navigate(["employee/update", id]);
  }

}
