import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StageService } from '../stage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-stage',
  templateUrl: './update-stage.component.html',
  styleUrls: ['./update-stage.component.css']
})
export class UpdateStageComponent implements OnInit {

  stage;
  stageForm;
  id
  constructor(private activatedRoute: ActivatedRoute, private stageService: StageService, private router: Router) {
  }

  

  ngOnInit() {
    this.id= this.activatedRoute.snapshot.paramMap.get('id');
    this.stageService.getStage(this.id).subscribe((res:any) => {
      this.stage = res;
      this.stageForm.patchValue({
        nom_etuduant: res.nom_etuduant,
        age: res.age,
        faculte: res.faculte
      })
    })
    this.stageForm = new FormGroup({
      nom_etuduant: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      faculte: new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    console.log(this.stageForm.value)
    this.stageService.updateStage(this.id, JSON.stringify(this.stageForm.value)).subscribe(res => {
      console.log('employee updated');
      this.router.navigate(['/stage'])
    }, err => console.error('Error from update:', err))
  }

}
