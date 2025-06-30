import { Component } from '@angular/core';
import { EpiList } from '../../lists/epi-list/epi-list';
import { Nav } from '../nav/nav';

@Component({
  selector: 'app-home',
  imports: [EpiList, Nav],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
