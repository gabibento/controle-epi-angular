import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-component',
  imports: [CommonModule],
  templateUrl: './list-component.html',
  styleUrl: './list-component.css'
})
export class ListComponent {
  @Input() columns: string[] = [];
  @Input() data: any[] = [];
}
