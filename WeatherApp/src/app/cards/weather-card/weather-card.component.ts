import { Component, OnInit, Input } from '@angular/core';
import { Cards } from '../cards.model';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  @Input() card: Cards;

  constructor() {
    console.log(this.card);
   }
  ngOnInit() {
  }

}
