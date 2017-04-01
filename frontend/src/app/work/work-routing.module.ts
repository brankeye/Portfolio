import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WorkComponent } from './work.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'work', component: WorkComponent },
    ])
  ]
})
export class WorkRoutingModule {

}
