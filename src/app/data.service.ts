import { Injectable } from '@angular/core';
import { Customer } from './models/customer'
import { Level } from './models/level';
import { Quest } from './models/quest';
import { Reward } from './models/reward';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getCustomers(): Customer[] {
    return [];
  }

  getLevels(): Level[] {
    return [];
  }

  getQuests(): Quest[] {
    return [];
  }

  getRewards(): Reward[] {
    return [];
  }

}
