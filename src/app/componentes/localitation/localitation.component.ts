import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-localitation',
  templateUrl: './localitation.component.html',
  styleUrls: ['./localitation.component.css']
})
export class LocalitationComponent implements OnInit {

  constructor() { }

  public lat : number;
  public lng : number;
  zoom : number = 17; 
  public active_map = true;

  ngOnInit() {
    this.active_map = true;

    $(document).ready(function(){
      $("#entro").click(function(){
        $('audio').remove();
        $('#entro a').addClass('activo');
        $('#entro_two a, #entro_four a').removeClass('activo');
        setTimeout(() => {
           $('#audio').append(""+
           "<audio preload='auto' tabindex='0' controls='' autoplay>" +
           "<source src='https://s3-us-west-2.amazonaws.com/allmetalmixtapes/Saxon%20-%201984%20-%20Crusader/03%20-%20Little%20Bit%20Of%20What%20You%20Fancy.mp3'>" +
           "</audio>" +
           "");
        }, 1000);
      });

      $('#entro_two').click(function(){
        $('audio').remove();
        $('#entro_two a').addClass('activo');
        $('#entro a, #entro_four a').removeClass('activo');
        setTimeout(() => {
          $('#audio').append(""+
          "<audio preload='auto' tabindex='0' controls='' autoplay>" +
          "<source src='https://s3-us-west-2.amazonaws.com/allmetalmixtapes/Saxon%20-%201984%20-%20Crusader/05%20-%20Set%20Me%20Free.mp3'>" +
          "</audio>" +
          "");
       }, 1000);
      });

      $('#entro_four').click(function(){
        $('audio').remove();
        $('#entro_four a').addClass('activo');
        $('#entro_two a, #entro_three a, #entro a').removeClass('activo');
        setTimeout(() => {
          $('#audio').append(""+
          "<audio preload='auto' tabindex='0' controls='' autoplay>" +
          "<source src='https://s3-us-west-2.amazonaws.com/allmetalmixtapes/Saxon%20-%201984%20-%20Crusader/06%20-%20Just%20Let%20Me%20Rock.mp3'>" +
          "</audio>" +
          "");
       }, 1000);
      });

      
    });

  }

  getLocation(){
    document.getElementById("title_local").style.padding = "0px";
    document.getElementById("btn_local").style.display = "none";
    
    this.active_map = false;
    navigator.geolocation.getCurrentPosition(position => {
      this.lat= position.coords.latitude;
      this.lng= position.coords.longitude;
    });
  };

  
}

