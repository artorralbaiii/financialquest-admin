import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { QuestComponent } from './quest/quest.component';
import { RewardComponent } from './reward/reward.component';
import { LevelComponent } from './level/level.component';
import { ProfileComponent } from './profile/profile.component';
import { ConfigComponent } from './config/config.component';
import { QuestFormComponent } from './quest/quest-form/quest-form.component';
import { RewardFormComponent } from './reward/reward-form/reward-form.component';
import { LevelFormComponent } from './level/level-form/level-form.component';
import { ProfileFormComponent } from './profile/profile-form/profile-form.component';
import { ConfigFormComponent } from './config/config-form/config-form.component';


const routes: Routes = [
  { path: 'customer', component: CustomerComponent },
  {
    path: 'quest', component: QuestComponent, children: [{
      path: 'new', component: QuestFormComponent
    }]
  },
  {
    path: 'reward', component: RewardComponent, children: [{
      path: 'new', component: RewardFormComponent
    }]
  },
  {
    path: 'level', component: LevelComponent, children: [{
      path: 'new', component: LevelFormComponent
    }]
  },
  {
    path: 'profile', component: ProfileComponent, children: [{
      path: 'new', component: ProfileFormComponent
    }]
  },
  {
    path: 'config', component: ConfigComponent, children: [{
      path: 'new', component: ConfigFormComponent
    }]
  },
  { path: '', redirectTo: 'customer', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
