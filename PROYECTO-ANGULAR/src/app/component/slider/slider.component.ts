import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

declare var $:any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura: number;
  @Input('etiquetas') captions: boolean;
  @Output() conseguirAutor = new EventEmitter();

  public autor: any;


  constructor() {
    this.autor = {
      nombre: "Victor Robles",
      website: "viscorRoble.es.com",
      youtube: "Victor Roble WEB"
    }
  }

  ngOnInit() {

    $("#logo").click(function(e){
      e.preventDefault();
      $("header").css("background", "green")
                 .css("height", "50px");
    })

    $(function(){
      console.log('***' + this.anchura);
      $('.galeria').bxSlider({
        mode: 'fade',
        captions: this.captions,
        slideWidth: this.anchura
      });
    });
  }

  lanzar(event){
    this.conseguirAutor.emit(this.autor);
  }

}
