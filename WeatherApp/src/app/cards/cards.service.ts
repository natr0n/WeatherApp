import { Injectable} from '@angular/core';
import { Cards } from './cards.model';
import { Subject } from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse, HttpRequest} from "@angular/common/http";


@Injectable()
export class CardsService {
  cardsListChangedEvent = new Subject<Cards[]>();
  maxContactId: number;
  private cards: Cards[] = [];

  
  constructor(private http: HttpClient,) { 
    this.maxContactId = this.getMaxId();  }



    storeCards(cards: Cards[]) {
      let stringToServer = JSON.stringify(this.cards);
      let header = new HttpHeaders({
        "Content-Type":"application/json"
      });
      this.http.put('http://localhost:3000/cards', stringToServer,{headers:header})
        .subscribe(result => {
          this.cardsListChangedEvent.next(Object.assign(this.cards));
        });
    }




    getCards() {
      this.http.get<{message: String, contacts: Cards[]}>('http://localhost:3000/cards')
        .subscribe(
          //success function
          (cardsData) => {
            this.cards = cardsData.contacts;
            console.log(this.cards);
            this.maxContactId = this.getMaxId();
            // this.getCards.next(this.cards.slice())
          });
      //error function
      (error: any) => {
        console.log(error);
      }
      return this.cards.slice();
    }

  getCard(id: string){
    return this.http.get<{message: String, contact: Cards}>('http://localhost:3000/cards/' + id);
  }

  deleteCard(card: Cards) {
    if (card === null ) {
      return;
    }
    this.http.delete('http://localhost:3000/cards/' + card.id)
    .subscribe(
      (response: Response) => {
        this.getCards();
        });

  }

  addCard(newCard: Cards) {
    if(!newCard){
      return;
    }


    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
   

    this.http.post<{message: String, contact: Cards}>('http://localhost:3000/cards', newCard, { headers: headers })
      .subscribe(
        (responseData) => {
          this.cards.push(responseData.contact);
        //   this.cards.sort((a,b) => (a.name > b.name ) ? 1 : ((b.name > a.name) ? -1 : 0));
          this.cardsListChangedEvent.next(this.cards.slice());
        });
  }

  updateCards(originalCard: Cards, newCard: Cards) {
    if (!originalCard || !newCard ){
      return;
    }
    const pos = this.cards.indexOf(originalCard);
    if (pos < 0) {
      return;
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const strContact= JSON.stringify(newCard);

    this.http.patch('http://localhost:3000/cards' + originalCard.id
      , strContact
      , { headers: headers })
      .subscribe(
        (cards: Cards[]) => {
          this.cards = cards;
          this.cardsListChangedEvent.next(this.cards.slice());
        });
  }

  getMaxId(): number {
    let maxId = 0;
    for (let card of this.cards){
      const currentId = +card.id;
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }


}