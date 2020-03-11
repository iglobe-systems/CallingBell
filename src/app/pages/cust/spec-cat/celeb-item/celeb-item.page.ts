import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { Router, NavigationExtras,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-celeb-item',
  templateUrl: './celeb-item.page.html',
  styleUrls: ['./celeb-item.page.scss'],
})
export class CelebItemPage implements OnInit {
  segment:any;
  segment2:any;
  service:any;

  public wholeCakes=[
    {id:25,name:"Butter Scotch",price:"630",image_url:"https://www.cksbakery.com/images/cakes/whole/new/Butterscotch.JPG",desc:"Discover the genius of the Parkinsons of Donaster, who invented butterscotch that takes this spongy, creamy cake loaded with layers of freshly whipped cream to a different level"},
    {id:25,name:"Strawberry",price:"462",image_url:"https://www.cksbakery.com/images/cakes/whole/new/Strawberry.JPG",desc:"The tingly, lingering flavour of strawberry flavoured cream slathers this soft and delicious gastronomic delight"},
    {id:25,name:"Black currant",price:"515",image_url:"https://www.cksbakery.com/images/cakes/whole/new/Black-currant.JPG",desc:"It's quite neat, it's a treat, and it's truly very bittersweet"},
    {id:25,name:"Black Forest",price:"572",image_url:"https://www.cksbakery.com/images/cakes/whole/new/Black-forest-2.JPG",desc:"On some occasions you just can’t deny yourself the indulgence of a chocolate sponge that’s battered with fresh cream, candied cherries and showered with a torrent of chocolate flakes"},
    {id:25,name:"Choco Truffle",price:"630",image_url:"https://www.cksbakery.com/images/cakes/whole/new/Choco-truffle.JPG",desc:"You can't help but lick your fingers with this luxurious, delicious, gooey masterpiece that’s crafted from rich chocolate truffle cream"},
    {id:25,name:"White Forest",price:"572",image_url:"https://www.cksbakery.com/images/cakes/whole/new/White-forest.JPG",desc:"For a heart that is pure, it’s always white for sure with this classic that’s rich and creamy and dressed in a coat of white chocolate flake"},
    {id:25,name:"Red Velvet",price:"630",image_url:"https://www.cksbakery.com/images/cakes/whole/new/RedVelvet.JPG",desc:"A vibrant red that’s a feast for the eyes and an eggless wonder that does wonders to the palate"},
    {id:25,name:"Chocolate & Nuts",price:"693",image_url:"https://www.cksbakery.com/images/cakes/whole/new/Choco-nuts.JPG",desc:"Its twist comes with a generous topping of chocolate truffle cream and a liberal sprinkling of nuts"},
  ]

  public themeCakes=[
    {id:25,name:"Bear Adventure",price:"600",image_url:"https://www.cksbakery.com/images/cakes/themecakes/ThemeCake-0.jpg", desc:"3 little bears climb a rose wall made of frosted cream, sweet almond icing and fresh cream."},
    {id:26,name:"Minion Rock",price:"700",image_url:"https://www.cksbakery.com/images/cakes/themecakes/ThemeCake-1.jpg",desc:"It’s the bright yellow, sunshine fellow cake! Soft cream vanilla cake is covered with almond icing for everyone to say Baboi!"},
    {id:27,name:"Jungle Book",price:"750",image_url:"https://www.cksbakery.com/images/cakes/themecakes/ThemeCake-2.jpg",desc:"Green grass and animals frolic on this dreamy cake of fresh cream vanilla with Pista icing."},
    {id:28,name:"Bear Dare",price:"600",image_url:"https://www.cksbakery.com/images/cakes/themecakes/ThemeCake-3.jpg",desc:"Bear are out on a dare! Playing on blue icing and enjoying a bite of the softest, smoothest cake filled with fresh cream."},
    {id:29,name:"Cream Bears",price:"750",image_url:"https://www.cksbakery.com/images/cakes/themecakes/ThemeCake-4.jpg", desc:"Little bears gambol on a sweet, creamy land of soft white icing. What can be more enchanting?"},
    {id:30,name:"Pengu Love",price:"700",image_url:"https://www.cksbakery.com/images/cakes/themecakes/ThemeCake-5.jpg", desc:"An icy world of almonds and cake. A place where cute penguins gather to make your life merry!"},
    {id:31,name:"Go for Goal",price:"600",image_url:"https://www.cksbakery.com/images/cakes/themecakes/ThemeCake-6.jpg", desc:"You just netted a sumptuous all pista delight that will turn all your friends into fans of your taste!"},
    {id:32,name:"Honky Tonk",price:"500",image_url:"https://www.cksbakery.com/images/cakes/themecakes/ThemeCake-7.jpg",desc:"A journey of a cake with peppermint sun shining bright and a delicious car to take you wherever you want!"},
    {id:33,name:"Bear Hug",price:"750",image_url:"https://www.cksbakery.com/images/cakes/themecakes/ThemeCake-8.jpg", desc:"Pink candy hearts raise this fluffly, creamy cake to dreamy heights! You’ll simply love it."},
  ]

  public birthdayCakes=[
    {id:25,name:"Elifantasy",price:"600",image_url:"https://www.cksbakery.com/images/cakes/birthdaycakes/Birthday-cake-0.jpg", desc:"3 little bears climb a rose wall made of frosted cream, sweet almond icing and fresh cream."},
    {id:26,name:"Chocrazy",price:"700",image_url:"https://www.cksbakery.com/images/cakes/birthdaycakes/Birthday-cake-2.jpg",desc:"It’s the bright yellow, sunshine fellow cake! Soft cream vanilla cake is covered with almond icing for everyone to say Baboi!"},
    {id:27,name:"All in Choc",price:"750",image_url:"https://www.cksbakery.com/images/cakes/birthdaycakes/Birthday-cake-9.jpg",desc:"Green grass and animals frolic on this dreamy cake of fresh cream vanilla with Pista icing."},
    {id:28,name:"Box of Delight",price:"600",image_url:"https://www.cksbakery.com/images/cakes/birthdaycakes/Birthday-cake-14.jpg",desc:"Bear are out on a dare! Playing on blue icing and enjoying a bite of the softest, smoothest cake filled with fresh cream."},
    {id:29,name:"Cream Bears",price:"750",image_url:"https://www.cksbakery.com/images/cakes/themecakes/ThemeCake-4.jpg", desc:"Little bears gambol on a sweet, creamy land of soft white icing. What can be more enchanting?"},
    {id:30,name:"Pengu Love",price:"700",image_url:"https://www.cksbakery.com/images/cakes/themecakes/ThemeCake-5.jpg", desc:"An icy world of almonds and cake. A place where cute penguins gather to make your life merry!"},
    {id:31,name:"Go for Goal",price:"600",image_url:"https://www.cksbakery.com/images/cakes/themecakes/ThemeCake-6.jpg", desc:"You just netted a sumptuous all pista delight that will turn all your friends into fans of your taste!"},
    {id:32,name:"Honky Tonk",price:"500",image_url:"https://www.cksbakery.com/images/cakes/themecakes/ThemeCake-7.jpg",desc:"A journey of a cake with peppermint sun shining bright and a delicious car to take you wherever you want!"},
    {id:33,name:"Bear Hug",price:"750",image_url:"https://www.cksbakery.com/images/cakes/themecakes/ThemeCake-8.jpg", desc:"Pink candy hearts raise this fluffly, creamy cake to dreamy heights! You’ll simply love it."},
  ]

  public weddingCakes=[
    {id:25,name:"Happily troth",price:"600",image_url:"https://www.cksbakery.com/images/cakes/weddingcakes/Wedding-Cake-0.jpg", desc:"A vanilla butter cake filled with whipped cream and frosted with white and lavender chiffon frosting."},
    {id:26,name:"Purple Daze",price:"700",image_url:"https://www.cksbakery.com/images/cakes/weddingcakes/Wedding-Cake-1.jpg",desc:"For all the moony eyed, a cake of royal passion! With blackberries. Swoon into it."},
    {id:27,name:"Tower of love",price:"750",image_url:"https://www.cksbakery.com/images/cakes/weddingcakes/Wedding-Cake-7.jpg",desc:"A pure fresh cream tower in gentle meringue. An ode to your forever love."},
    {id:28,name:"Love in red and White",price:"600",image_url:"https://www.cksbakery.com/images/cakes/weddingcakes/Wedding-Cake-3.jpg",desc:"A rich chocolate cake with crafted hearts or ornamenting it."},
    {id:29,name:"Ringed",price:"750",image_url:"https://www.cksbakery.com/images/cakes/weddingcakes/Wedding-Cake-6.jpg", desc:"A swirl of vanilla and chocolate romance in this dense cake. It’s a love story by itself."},
    {id:30,name:"Heart of Hearts",price:"700",image_url:"https://www.cksbakery.com/images/cakes/weddingcakes/Wedding-Cake-2.jpg", desc:"A cake that stands for true love all the way. A white chocolate cake is covered with silky almond fondant and covered with Candy hearts. A memory you’ll cherish forever."},
  ]

  public photoCakes=[
    {id:25,name:"Center Stage",price:"600",image_url:"https://www.cksbakery.com/images/cakes/photo/photo_cake_7.jpg", desc:"The apple of everyone’s eyes, your pretty smile brings alive this cake. Be the centre of attraction along with this tasty delight."},
    {id:26,name:"Thalapathi Special",price:"700",image_url:"https://www.cksbakery.com/images/cakes/photo/photo_cake_1.jpg",desc:"Superstar of a cake meant for the action hero. In chocolate and cream, enjoy a cake dream!"},
  ]

  public physicalCard=[
    {id:25,name:"red-wedding",price:"99",image_url:"assets/img/card/theme2.jpg"},
    {id:25,name:"colourful-bday",price:"99",image_url:"assets/img/card/theme1.jpg"},
    {id:25,name:"basic-bday",price:"99",image_url:"assets/img/card/theme3.jpg"},
  ]

  public eCard=[
    {id:25,name:"colourful-bday",price:"10",image_url:"assets/img/card/theme1.jpg"},
    {id:25,name:"red-wedding",price:"10",image_url:"assets/img/card/theme2.jpg"},
    {id:25,name:"basic-bday",price:"10",image_url:"assets/img/card/theme3.jpg"},
  ]

  public returnGifts=[
    {id:25,name:"the grow kit",image_url:"assets/img/gifts/2p.jpg",price:"200",desc:
      ["seeds packet : 1","Cocopeat disc : 1","Plastic pots : 2","Coir pot : 1","Packing bag : 1","Name & description tag : 1"]
    },
    {id:25,name:"the spa hamper",image_url:"assets/img/gifts/6p.jpg",price:"200",desc:
      ["Pumice stone : 1","Scented soap : 1","Towel : 1","Loofah : 1","Packing bag : 1","Name & description tag : 1"]
    },
    {id:25,name:"the coffee hamper",image_url:"assets/img/gifts/4p.jpg",price:"200",desc:
      ["Coffee mug steel : 1","Coaster : 1","Packing bag : 1","Name & description tag : 1"]
    },
    {id:25,name:"the gardener",image_url:"assets/img/gifts/2p.jpg",price:"350",desc:
      ["Plastic pots : 2","Seed packets : 2","Cocopeat disc : 2","Garden gloves : 1","Garden tool set : 1","Packing tray : 1","Name & description tag : 1"]
    },
    {id:25,name:"THE PAMPERED",image_url:"assets/img/gifts/6p.jpg",price:"350",desc:
      ["Pumice stone : 1","Scented soap : 1","Towel : 1","Loofah : 1","Scented candles : 2","Packing bag : 1","Fragrance sachet : 1","Name & description tag : 1"]
    },
    {id:25,name:"THE MADRASI",image_url:"assets/img/gifts/3p.jpg",price:"350",desc:
      ["Dabara coffee glass brass : 1 set","Pickle jars : 2","filter coffee powder : 50 gms","Steel filter : 1","Packing tray : 1","Name & description tag : 1"]
    }
  ]

  constructor(public navCtrl: NavController,
              private router: Router,
              private route:ActivatedRoute) {
      this.segment ="Whole Cakes";
      this.segment2 ="E card"; 
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.service = this.router.getCurrentNavigation().extras.state.package;
        console.log(this.service);
      }
   });
  }

  goToCardForm(card){
    let navigationExtras: NavigationExtras={
      state:{
        package:card
      }
    }
    this.router.navigate(['celeb-form'],navigationExtras);
  }

  back(){
    this.navCtrl.navigateBack('celeb-package');
  }
}
