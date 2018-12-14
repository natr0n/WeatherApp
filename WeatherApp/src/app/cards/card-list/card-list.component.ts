import { Component, OnInit, OnDestroy } from '@angular/core';
import { Cards } from '../cards.model';
import { Subscription } from 'rxjs';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit, OnDestroy {
  cards: Cards[] = [];
  private subscription: Subscription;

  constructor(private cardService: CardsService) {
    this.cardService.getCards();
   }

  ngOnInit() {
    this.subscription = this.cardService.cardsListChangedEvent
      .subscribe(
        (cardsList: Cards[]) => {
          this.cards = cardsList;
        }
      )
    
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
