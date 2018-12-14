import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards/cards.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CardsService]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
