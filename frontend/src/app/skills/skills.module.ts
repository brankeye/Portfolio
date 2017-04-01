import { NgModule } from '@angular/core';
import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills.component';
import { DataService } from '../services/data.service';
import { SharedModule } from '../shared/shared.module';
import { SkillsFilterPipe } from './skills-filter.pipe';

@NgModule({
  imports: [SkillsRoutingModule, SharedModule],
  providers: [DataService],
  declarations: [SkillsComponent, SkillsFilterPipe],
  exports: [SkillsComponent]
})
export class SkillsModule {

}
