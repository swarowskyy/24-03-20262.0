import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.ht,ml',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('layout');
}
