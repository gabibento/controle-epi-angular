import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EpiList } from './components/epi/epi-list/epi-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EpiList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'controle-epi';
}
