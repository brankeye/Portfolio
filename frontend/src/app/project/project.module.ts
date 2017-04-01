import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { ProjectComponent } from './project.component';
import { ProjectRoutingModule } from './project-routing.module';
import { DataService } from '../services/data.service';

@NgModule({
  imports: [ProjectRoutingModule, SharedModule],
  declarations: [ProjectComponent],
  exports: [ProjectComponent],
  providers: [DataService]
})
export class ProjectModule {

}
