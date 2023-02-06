import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contactoUsuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public usuario: ContactoUsuario;
  public showData: String;

  constructor() { }

  ngOnInit() {
    this.usuario = new ContactoUsuario('','','','');
  }

  onSubmit(form){
    this.showData = this.usuario.nombre + ' ' + this.usuario.apellido;
    /*form.reset();*/
    console.log("Submit Lanzado");
    console.log(this.usuario);


  }

}
