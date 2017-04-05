import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
  imports: [ProjectsRoutingModule, SharedModule],
  declarations: [ProjectsComponent],
  exports: [ProjectsComponent]
})
export class ProjectsModule {

}
