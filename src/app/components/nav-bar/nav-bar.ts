import { Component, OnInit, signal } from '@angular/core';
import { NavMenuItems } from './NavMenuItems';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  imports: [ CommonModule, RouterModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar implements OnInit {


  public  activeRoute = signal('');


  readonly menuItems = signal<NavMenuItems[]>([
    {
      label: 'Home',
      route: '/home',
    },
    {
      label: 'Our Courses',
      route: '/our-courses',
    },

     {
      label: 'Our Baristas',
      route: '/our-students',
    },
  ]);


  public setActive(route: string) {
    this.activeRoute.set(route);
  }

  ngOnInit(): void {
      this.activeRoute.set('home')
  }

}
