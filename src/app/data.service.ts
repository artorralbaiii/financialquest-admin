import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ICustomer } from './models/customer'
import { ILevel } from './models/level';
import { IQuest } from './models/quest';
import { IReward } from './models/reward';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiHostName: string = 'https://6ly4xwm888.execute-api.ap-southeast-1.amazonaws.com/dev/data/';
  // apiHostName: string = '/dev/data/';

  constructor(private http: HttpClient) { }

  public save(model: string, formData: any) {
    return this.http.post<IQuest>(this.apiHostName + model, formData);
  }

  public get(model: string, id: string) {
    return this.http.get<IQuest>(this.apiHostName + model);
  }

}
