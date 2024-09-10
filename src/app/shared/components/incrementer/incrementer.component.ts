import { Component, OnInit } from '@angular/core';
import { increment } from '@angular/fire/firestore';
import { IncrementService } from '../../services/increment.service';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styleUrls: ['./incrementer.component.scss'],
})
export class IncrementerComponent {

  valor: number= 0;

  constructor(
    public incrementService: IncrementService
  ) { }

  decrement(){ 
    if (this.incrementService.valor>0)
      this.incrementService.valor--;
  }

  increment(){ 
    this.incrementService.valor++;
  }

}
