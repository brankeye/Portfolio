import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { LinksComponent } from './links/links.component';
import { StoryComponent } from './story/story.component';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [LinksComponent, NavbarComponent, StoryComponent],
  exports: [LinksComponent, NavbarComponent, StoryComponent,
    CommonModule, FormsModule, RouterModule]
})
export class SharedModule {

}
