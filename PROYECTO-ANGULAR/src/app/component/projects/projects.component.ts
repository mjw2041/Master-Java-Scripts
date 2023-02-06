import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/models/project';
import { ProjectService } from 'src/app/service/project.service';
import { Global } from 'src/app/service/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {

  public projects: Projects[];
  public url: string;

  constructor( private _projectService: ProjectService) {
      this.url = Global.url;
  }


  ngOnInit() {
    this.getProjects();
  }

  getProjects(){
    this._projectService.getProjects().subscribe(
      response => {
        if (response.projects) {
          this.projects = response.projects;
          console.log("encontro ");
        }
        console.log(response);
      },
      error => {
        console.log(<any>error)
      }
    )
  }
}
