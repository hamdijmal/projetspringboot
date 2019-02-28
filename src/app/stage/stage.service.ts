import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';


const headers = { 'Content-Type': 'application/json' };
@Injectable()
export class StageService {

  apiUrl;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

 

  getStages() {
    return this.http.get(this.apiUrl + "company/stages");
  }

  addStage(stage: Object) {
    return this.http.post(this.apiUrl + "company/stages/add", JSON.stringify(stage), { headers: headers });
  }


  deleteStage(id) {
    return this.http.delete(this.apiUrl + "company/stages/" + id,
      { headers: headers });
  }

  getStage(id) {
    return this.http.get(this.apiUrl + "company/stages/" + id);
  }

  updateStage(id,body){
    return this.http.put(this.apiUrl+"company/stages/"+id,body,{headers: headers});
  }
}
