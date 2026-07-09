import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { materialImports } from './util/globalImports';
import { MatTooltip } from "@angular/material/tooltip";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ...materialImports, MatTooltip],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tmb-front');
  showFiller = false;
}