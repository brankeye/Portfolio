import { EducationComponent } from './education.component';
import { SharedModule } from '../shared/shared.module';
import { EducationRoutingModule } from './education-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [EducationRoutingModule, SharedModule],
  declarations: [EducationComponent],
  exports: [EducationComponent]
})
export class EducationModule {
}
