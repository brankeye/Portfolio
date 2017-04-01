import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { WorkComponent } from './work.component';
import { WorkRoutingModule } from './work-routing.module';

@NgModule({
  imports: [WorkRoutingModule, SharedModule],
  declarations: [WorkComponent],
  exports: [WorkComponent]
})
export class WorkModule {

}
