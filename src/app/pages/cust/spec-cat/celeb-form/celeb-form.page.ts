import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-celeb-form',
  templateUrl: './celeb-form.page.html',
  styleUrls: ['./celeb-form.page.scss'],
})
export class CelebFormPage implements OnInit {
	// celeb:any;
	public celeb=[
  		{id:1,img:'assets/img/celeb/ewish.png',name:'E Wishes',rate:10},
  		{id:2,img:'assets/img/celeb/basicpack.png',name:'Personalised Card + Bouquet + CallingBell Basket',rate:499},
  		{id:3,img:'assets/img/celeb/level1pack.png',rate:799},
  		{id:4,img:'assets/img/celeb/level2pack.png',rate:1299},
  		{id:5,img:'assets/img/celeb/level3pack.png',rate:1499},
  		{id:6,img:'assets/img/celeb/level4pack.png',rate:1799},
  	]
  constructor() {
  	
   }


  ngOnInit() {
  }

    btnActivate(ionicButton) {
    if(ionicButton.color === 'light')
      ionicButton.color =  'dark';
    else
      ionicButton.color = 'light';
  }

}
