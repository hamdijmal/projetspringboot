import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StageService } from '../stage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-stage',
  templateUrl: './add-stage.component.html',
  styleUrls: ['./add-stage.component.css']
})
export class AddStageComponent implements OnInit {

  stageForm: FormGroup;
  constructor(private stageService: StageService,private router:Router) {
    this.stageForm = new FormGroup({
      nom_etuduant: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      faculte: new FormControl('', Validators.required)
    })
  }


  ngOnInit() {
  }

  onSubmit() {
    this.stageService.addStage(this.stageForm.value).subscribe(val => {
      console.log('Added !!!', val)
      this.router.navigate(['/stage'])
    }, err => console.error("erro... ", err))
  }


}
