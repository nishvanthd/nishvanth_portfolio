import { Component, signal } from '@angular/core';

import { Header } from './header/header';
import { Nav } from './nav/nav';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  imports: [Header, Nav, ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {



}
