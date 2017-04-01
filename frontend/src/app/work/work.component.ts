import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IStory } from '../shared/story/story';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  work: IStory;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.work = this._dataService.getWork();
  }
}
