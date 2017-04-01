import { NgModule } from '@angular/core';
import { SkillsComponent } from './skills.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'skills', component: SkillsComponent }
    ])
  ]
})
export class SkillsRoutingModule {
}
