import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StageService } from './stage.service';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {
  stages = [];
  constructor(private stageService: StageService, private router: Router) {
    this.stageService.getStages().subscribe((res: any) => {
      this.stages = res;
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
    this.stageService.deleteStage(id).subscribe((res) => {
      console.log("Employee deleted");
      this.stages.splice(this.getIndex(this.stages, id), 1)
    },
      err => console.error('Error from delete employee: ', err))
  }

  update(id) {
    console.log('update: ', id);
    this.router.navigate(["stage/update", id]);
  }

}
