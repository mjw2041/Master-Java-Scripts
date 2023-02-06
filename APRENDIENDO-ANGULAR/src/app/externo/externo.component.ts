import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {
  public user: any;
  public userId: any;
  public fecha: any;

  public newUser: any;
  public usuarioGuardado: any;

  constructor( private _peticionesService: PeticionesService )
  {
      this.userId = 1;

      this.newUser = {
            "name": "1",
            "job": "3"
      }
  }

  ngOnInit() {
      this.cargaUsuario();
      this.fecha = new Date(1972, 2, 7);
  }

  cargaUsuario(){
    this._peticionesService.getUser(this.userId).subscribe(
      result => {
          this.user = result.data;
          console.log( this.user)
       },
      error =>{
        console.log("Dio Error")
        console.log(<any>error)
      });
  }

  onSubmit(form){
    console.log(this.newUser);
    this._peticionesService.addUser(this.newUser).subscribe(
        response => {
          console.log(response);
          this.usuarioGuardado = response;
          console.log("usuarioGuardado " + this.usuarioGuardado.name);
          form.reset();

        },
        error => {
          console.log(<any>error);
        }

    )
  }
}
