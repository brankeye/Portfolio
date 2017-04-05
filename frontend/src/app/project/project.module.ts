import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { ProjectComponent } from './project.component';
import { ProjectRoutingModule } from './project-routing.module';

@NgModule({
  imports: [ProjectRoutingModule, SharedModule],
  declarations: [ProjectComponent],
  exports: [ProjectComponent]
})
export class ProjectModule {

}
