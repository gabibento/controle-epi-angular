import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EpiList } from './components/epi/epi-list/epi-list';
import { Login } from './components/login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EpiList, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'controle-epi';
}
