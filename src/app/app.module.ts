import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { QuestComponent } from './quest/quest.component';
import { RewardComponent } from './reward/reward.component';
import { LevelComponent } from './level/level.component';
import { ProfileComponent } from './profile/profile.component';
import { ConfigComponent } from './config/config.component';
import { QuestFormComponent } from './quest/quest-form/quest-form.component';
import { RewardFormComponent } from './reward/reward-form/reward-form.component';
import { TableControlsComponent } from './table-controls/table-controls.component';
import { LevelFormComponent } from './level/level-form/level-form.component';
import { ProfileFormComponent } from './profile/profile-form/profile-form.component';
import { ConfigFormComponent } from './config/config-form/config-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    QuestComponent,
    RewardComponent,
    LevelComponent,
    ProfileComponent,
    ConfigComponent,
    QuestFormComponent,
    RewardFormComponent,
    TableControlsComponent,
    LevelFormComponent,
    ProfileFormComponent,
    ConfigFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
