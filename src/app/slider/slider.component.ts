import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  items = [
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

}
