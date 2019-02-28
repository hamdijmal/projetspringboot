import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee;
  employeeForm;
  id
  constructor(private activatedRoute: ActivatedRoute, private employeeService: EmployeeService, private router: Router) {
  }

  ngOnInit() {
     this.id= this.activatedRoute.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(this.id).subscribe((res:any) => {
      this.employee = res;
      this.employeeForm.patchValue({
        name: res.name,
        designation: res.designation,
        expertise: res.expertise
      })
    })
    this.employeeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      designation: new FormControl('', Validators.required),
      expertise: new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    console.log(this.employeeForm.value)
    this.employeeService.updateEmployee(this.id, JSON.stringify(this.employeeForm.value)).subscribe(res => {
      console.log('employee updated');
      this.router.navigate(['/employee'])
    }, err => console.error('Error from update:', err))
  }

}
