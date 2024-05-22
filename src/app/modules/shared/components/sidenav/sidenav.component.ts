import { MediaMatcher } from '@angular/cdk/layout';
<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component } from '@angular/core';
>>>>>>> 7acd418a01973cacc6a3338fd0f9352405759122

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
<<<<<<< HEAD
export class SidenavComponent implements OnInit{
  mobileQuery: MediaQueryList;

  menuNav=[
    {name:"Home", route:"home", icon:"home"},
    {name:"Categorias", route:"category", icon:"Category"},
    {name:"Productos", route:"product", icon:"production_quantity_limits"}
  ]

  constructor(media:MediaMatcher){
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

  ngOnInit(): void {
  }
}    

=======
export class SidenavComponent {

  mobileQuery: MediaQueryList;

  menuNav = [
    {name: "Home", route: "home", icon: "home"},
    {name: "Categorías", route: "home", icon: "category"},
    {name: "Productos", route: "home", icon: "production_quantity_limits"}
  ]

  constructor(media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

}
>>>>>>> 7acd418a01973cacc6a3338fd0f9352405759122
