import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { materialImports } from './util/globalImports';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ...materialImports],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tmb-front');
  showFiller = false;
  toggleSidenav() {
    this.showFiller = true;
  }
}