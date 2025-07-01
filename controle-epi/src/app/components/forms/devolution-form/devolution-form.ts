import { Component } from '@angular/core';
import { DevolutionService } from '../../../services/devolution-service';
import { DevolutionFormInterface } from '../../../interfaces/DevolutionFormInterface';

@Component({
  selector: 'app-devolution-form',
  imports: [],
  templateUrl: './devolution-form.html',
  styleUrl: './devolution-form.css'
})
export class DevolutionForm {
  devolution: DevolutionFormInterface = {
    loanId: 0,
    devolutionDate: ''
  }
  constructor(private devolutionService: DevolutionService){}

  create(){

  }
}
