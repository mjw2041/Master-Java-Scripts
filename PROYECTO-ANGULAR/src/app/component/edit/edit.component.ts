import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Projects } from 'src/app/models/project';
import { ProjectService } from 'src/app/service/project.service';
import { UploadService } from 'src/app/service/upload.service';
import { Global } from 'src/app/service/global';


@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ ProjectService, UploadService ]
})
export class EditComponent implements OnInit {

  public title: string;
  public project: Projects;
  public status: string;
  public filesToUpload: Array<File>;
  public saveProject;
  public url: string;

  constructor(

        private _projectService: ProjectService,
        private _uploadService: UploadService,

        private _router: Router,
        private _route: ActivatedRoute
  ){
    this.title = "Editar Proyecto "
    this.url = Global.url;
  }

  ngOnInit() {
    this._route.params.subscribe( params => {
      let id = params.id;
      console.log('Empezo');
      this.getProject(id);
      console.log(this.project);
    })
  }

  getProject (id){
  this._projectService.getProject(id).subscribe(
      response => {
        console.log ('Hola');
        this.project = response.project
        console.log(this.project);
      }, error => {
          console.log(<any>error);
    })
  }

  onSubmit() {
    this._projectService.updateProject(this.project).subscribe(
      response => {
         // Subir la imagen
         if (this.filesToUpload ) {
              this._uploadService.makeFileRequest( Global.url+'/uploadImage/' + response.project._id,
                     [], this.filesToUpload, 'image' )
                 .then((result:any) => {
                       this.saveProject = result.project;
                       this.status = 'success';
                       console.log(result);
              }) ;
         } else {
             this.saveProject = response.project;
             this.status = 'success';
         }


      }, error => {
          console.log(<any>error);
    }
  )};

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }


}
