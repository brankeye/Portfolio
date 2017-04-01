import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: string[];
  skillsFilterText = '';

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.skills = this._dataService.getSkills();
  }

}
