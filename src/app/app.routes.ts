import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () =>
      import('../app/components/shell-component/shell-component').then(
        (m) => m.ShellComponent
      ),
      children: [
         {
    path: 'home',
    loadComponent: () =>
      import('../app/components/home/home').then(
        (m) => m.Home
      ),

  },




  {
    path: 'our-courses',
    loadComponent: () =>
      import('../app/components/our-courses/our-courses').then(
        (m) => m.OurCourses
      ),
  },

  {
    path: 'our-students',
    loadComponent: () =>
      import('../app/components/our-studetns/our-studetns').then(
        (m) => m.OurStudetns
      ),
  },
      ]
  },

];
