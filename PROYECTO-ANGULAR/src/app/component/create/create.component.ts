import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/models/project';
import { ProjectService } from 'src/app/service/project.service';
import { UploadService } from 'src/app/service/upload.service';
import { Global } from 'src/app/service/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ ProjectService, UploadService ]
})
export class CreateComponent implements OnInit {

  public title: string;
  public project: Projects;
  public status: string;
  public filesToUpload: Array<File>;
  public saveProject;


  constructor(

        private _projectService: ProjectService,
        private _uploadService: UploadService,


  ){
    this.title = "Crear Proyecto"
    this.project = new Projects('', '', '', '', 2019, '', '', );
  }

  ngOnInit() {
  }

  onSubmit(form){
    this._projectService.saveProject(this.project).subscribe(
			response => {
				if(response.project){

					// Subir la imagen
					if(this.filesToUpload){
						this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image')
						.then((result:any) => {

							this.saveProject = result.project;

							this.status = 'success';
							form.reset();
						});
					}else{
						this.saveProject = response.project;
						this.status = 'success';
						form.reset();
					}

				}else{
					this.status = 'failed';
				}
			},
			error => {
				console.log(<any>error);
			}
		);

  }

  fileChangeEvent(fileInput: any){
      this.filesToUpload = <Array<File>>fileInput.target.files;
  }


}
