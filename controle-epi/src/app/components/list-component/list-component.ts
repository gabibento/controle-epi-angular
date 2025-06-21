import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-component',
  imports: [CommonModule],
  templateUrl: './list-component.html',
  styleUrl: './list-component.css'
})
export class ListComponent {
  @Input() columns: string[] = [];
  @Input() data: any[] = [];

  @Output() rowClick = new EventEmitter<any>();

  onRowClick(item: any){
    this.rowClick.emit(item);
  }
}
