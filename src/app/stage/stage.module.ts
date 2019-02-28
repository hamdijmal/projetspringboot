import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StageComponent } from './stage.component';

import { StageService } from './stage.service';
import { CommonModule } from '@angular/common';
import { AddStageComponent } from './add-stage/add-stage.component';

import { UpdateStageComponent } from './update-stage/update-stage.component';




const routes: Routes = [{
  path: '',
  component: StageComponent
}, {
  path: 'add',
  component: AddStageComponent
}, {
  path: 'update/:id',
  component: UpdateStageComponent
}
]

@NgModule({
  declarations: [
    StageComponent,
    AddStageComponent,

    UpdateStageComponent
  
  ],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    StageService
  ],
  exports: [RouterModule]
})
export class StageModule { }
