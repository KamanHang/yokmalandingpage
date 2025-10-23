import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "../nav-bar/nav-bar";

@Component({
  selector: 'app-shell-component',
  imports: [RouterOutlet, NavBar],
  templateUrl: './shell-component.html',
  styleUrl: './shell-component.css',
})
export class ShellComponent {

}
