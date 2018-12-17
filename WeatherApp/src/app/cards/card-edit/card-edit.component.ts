import { Component, OnInit } from '@angular/core';
import { Cards } from '../cards.model';
import { CardsService } from '../cards.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css']
})
export class CardEditComponent implements OnInit {
  originalCard: Cards;
  card: Cards;
  editMode: boolean = false;

  constructor(private cardsService: CardsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          const id = params.id;
          if (id == undefined || id == null) {
            this.editMode = false;
            return;
          }
          this.cardsService.getCard(id)
            .subscribe(
              (responseData) => {
                this.originalCard = responseData.card;
                if (this.originalCard == undefined || this.originalCard == null) {
                  return;
                }
                this.editMode = true;
                this.card = JSON.parse(JSON.stringify(this.originalCard));
                console.log(this.card);
              }
            )
        }
      )
  }

  onSubmit(form: NgForm){
    // let newId = this.cardsService.getMaxId();
    // newId = newId++;
    let values = form.value;
    // documentUrl to match name
    const newCards = new Cards(values['id'], values['city'], values['image'], values['temp'], values['min'], values['max']);
    if (this.editMode) {
      this.cardsService.updateCards(this.originalCard, newCards);
    } else {
        this.cardsService.addCard(newCards);
    }
    this.router.navigate(['/cards']);
    console.log(form.value);
  }

  onCancel() {
    this.router.navigate(['/cards']);
  }


}
