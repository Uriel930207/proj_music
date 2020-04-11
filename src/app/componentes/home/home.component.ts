import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public active = true;

  ngOnInit() {
    this.active_btn();
  }

  active_btn(): void {
    this.active = true;

    setTimeout(() => {
      document.getElementById("top_time").style.transition = "all .2s ease";
      document.getElementById("top_time").style.left = "10%";

      this.active = false;
      console.log(this.active);
    }, 3000);
  }

}
