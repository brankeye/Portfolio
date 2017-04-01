import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IProject } from './project';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project: IProject;

  constructor(
    private _route: ActivatedRoute,
    private _dataService: DataService) { }

  getProjectId(): number {
    return +this._route.snapshot.params['id'];
  }

  ngOnInit() {
    const projectId = this.getProjectId();
    this.project = this._dataService.getProject(projectId);
  }
}
