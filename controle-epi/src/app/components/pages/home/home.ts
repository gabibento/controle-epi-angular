import { Component } from '@angular/core';
import { EpiList } from '../../epi/epi-list/epi-list';

@Component({
  selector: 'app-home',
  imports: [EpiList],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
