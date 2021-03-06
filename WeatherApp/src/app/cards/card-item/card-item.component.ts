import { Component, OnInit, Input } from '@angular/core';
import { Cards } from '../cards.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
  @Input() card: Cards;

  constructor() { 
  }

  ngOnInit() {
    console.log(this.card);
  }

}
