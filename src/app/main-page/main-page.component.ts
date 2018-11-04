import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.giveClasses();
  }

  show = false;
  modal_title:string;
  modal_text:string;
  modal_url:string;
  menupanel = false;

  @ViewChild('modal') modal;
  // @ViewChild('menu') menu;

  list_of_cards = [
    {
      "image_url":"../assets/img/image_1.png",
      "date":"1900-1991",
      "name":"Казахстан и новые независимые государства",
      "text":"lorem IPSUM 1"
    },
    {
      "image_url":"../assets/img/image_2.png",
      "date":"1900-1992",
      "name":"Казахстан и новые независимые государства",
      "text":"lorem IPSUM 2"
    },
    {
      "image_url":"../assets/img/image_3.png",
      "date":"1900-1993",
      "name":"Казахстан и новые независимые государства",
      "text":"lorem IPSUM 3"
    },
    {
      "image_url":"../assets/img/image_4.png",
      "date":"1900-1994",
      "name":"Казахстан и новые независимые государства",
      "text":"lorem IPSUM 4"
    },
    {
      "image_url":"../assets/img/image_1.png",
      "date":"1900-1995",
      "name":"Казахстан и новые независимые государства",
      "text":"lorem IPSUM 5"
    }
  ];

  showData(val){
    this.show = !this.show;
    this.modal_text = val.text;
    this.modal_title = val.name;
    console.log(this.modal_text,this.modal_title);
  }

  overlayClicked(e){
      if(e.path.indexOf(this.modal.nativeElement)===-1){
        this.show = !this.show;
      }
  }

  showMenu(){
    this.menupanel = !this.menupanel;
    console.log(this.menupanel);
  }

}
