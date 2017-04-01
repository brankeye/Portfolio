import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IProject } from '../project/project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: IProject[];

  constructor(
    private _dataService: DataService,
    private _router: Router) { }

  goToProjectDetails(projectId: number) {
    this._router.navigate(['/projects', projectId]);
  }

  ngOnInit() {
    this.projects = this._dataService.getProjects();
  }

}
