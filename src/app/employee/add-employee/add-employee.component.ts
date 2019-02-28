import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  constructor(private employeeService: EmployeeService,private router:Router) {
    this.employeeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      designation: new FormControl('', Validators.required),
      expertise: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {

  }

  onSubmit() {
    this.employeeService.addEmployee(this.employeeForm.value).subscribe(val => {
      console.log('Added !!!', val)
      this.router.navigate(['/employee'])
    }, err => console.error("erro... ", err))
  }
}
