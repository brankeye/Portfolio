import { Component, Input, OnInit } from '@angular/core';
import { IStory } from './story';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  @Input() story: IStory;
  dateString: string;

  constructor() {
  }

  ngOnInit() {
    if (this.story.startDate && this.story.endDate) {
      this.dateString = this.story.startDate + ' to ' +
                        this.story.endDate;
    } else if (this.story.endDate) {
      this.dateString = this.story.endDate;
    }
  }
}
