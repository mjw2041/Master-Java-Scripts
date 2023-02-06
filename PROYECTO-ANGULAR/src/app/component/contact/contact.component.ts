import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public widthSlider :number;
  public anchuraToSlider:number;
  public captions : boolean;
  public autor: any;

  @ViewChild('textos', null) textos;


  constructor() {
    this.captions = true
  }

  ngOnInit() {
    this.captions = false
  }

  cargarSlider(){
    this.anchuraToSlider = this.widthSlider;
  }

  resetearSlider(){
    this.anchuraToSlider = null;
  }

  getAutor(event) {
    this.autor = event;
  }
}
