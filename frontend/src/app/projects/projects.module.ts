import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { DataService } from '../services/data.service';

@NgModule({
  imports: [ProjectsRoutingModule, SharedModule],
  declarations: [ProjectsComponent],
  exports: [ProjectsComponent],
  providers: [DataService]
})
export class ProjectsModule {

}
