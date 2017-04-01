import { EducationComponent } from './education.component';
import { SharedModule } from '../shared/shared.module';
import { EducationRoutingModule } from './education-routing.module';
import { NgModule } from '@angular/core';
import { DataService } from '../services/data.service';

@NgModule({
  imports: [EducationRoutingModule, SharedModule],
  declarations: [EducationComponent],
  exports: [EducationComponent],
  providers: [DataService]
})
export class EducationModule {
}
