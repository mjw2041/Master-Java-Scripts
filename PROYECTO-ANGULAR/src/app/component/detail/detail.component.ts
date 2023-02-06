import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


import { Global } from 'src/app/service/global';
import { ProjectService } from 'src/app/service/project.service';
import { Projects } from 'src/app/models/project';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {

  public url: string;
  public project: Projects;
  public confirm: boolean;

  constructor(
      private _projectService: ProjectService,
      private _router: Router,
      private _route: ActivatedRoute
  ){
    this.url = Global.url;
    this.confirm = false;
  }

  ngOnInit() {
        this._route.params.subscribe( params => {
          let id = params.id;
          this.getProject(id);
        });
  }

  getProject (id){
    this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.project
      }, error => {
          console.log(<any>error);
      }
    )
  }

  setConfirm(confirm){
    this.confirm = confirm;
  }

  deleteProject(id){
    this._projectService.deleteProject(id).subscribe(
      response => {
          this._router.navigate(['/proyectos']);
          console.log("elimino");
      },
      error => {
        console.log(<any>error)
      }
    )
  }

}
