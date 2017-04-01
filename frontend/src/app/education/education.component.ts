import { Component, OnInit } from '@angular/core';
import { IStory } from '../shared/story/story';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education: IStory;

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this.education = this._dataService.getEducation();
  }
}
