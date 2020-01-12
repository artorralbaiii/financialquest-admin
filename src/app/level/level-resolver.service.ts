import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class LevelResolverService implements Resolve<Observable<any>> {

  constructor(private dataservice: DataService) { }

  resolve() {
    return this.dataservice.get('level', null);
  }
}