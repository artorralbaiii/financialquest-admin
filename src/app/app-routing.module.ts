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
import { QuestResolverService } from './quest/quest-resolver.service';
import { ProfileResolverService } from './profile/profile-resolver.service';
import { LevelResolverService } from './level/level-resolver.service';
import { RewardResolverService } from './reward/reward-resolver.service';
import { ConfigResolverService } from './config/config-resolver.service';


const routes: Routes = [
  { path: 'config/new', component: ConfigFormComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'level/new', component: LevelFormComponent },
  { path: 'profile/new', component: ProfileFormComponent },
  {
    path: 'quest/new', component: QuestFormComponent, resolve: {
      profiles: ProfileResolverService
    }
  },
  {
    path: 'reward/new', component: RewardFormComponent, resolve: {
      profiles: ProfileResolverService
    }
  },
  {
    path: 'quest', component: QuestComponent, resolve: {
      quest: QuestResolverService
    }
  },
  {
    path: 'reward', component: RewardComponent, resolve: {
      rewards: RewardResolverService
    }
  },
  {
    path: 'level', component: LevelComponent, resolve: {
      levels: LevelResolverService
    }
  },
  {
    path: 'profile', component: ProfileComponent, resolve: {
      profiles: ProfileResolverService
    }
  },
  {
    path: 'config', component: ConfigComponent, resolve: {
      configs: ConfigResolverService
    }
  },
  { path: '', redirectTo: 'customer', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
