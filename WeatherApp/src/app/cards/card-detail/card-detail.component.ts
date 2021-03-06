import { Component, OnInit, Input } from '@angular/core';
import { Cards } from '../cards.model';
import { CardsService } from '../cards.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  card: Cards; 
  id: string;
  
  constructor(private cardsService: CardsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.cardsService.getCard(this.id)
          .subscribe(
            (responseData) => {
              this.card = responseData.card;
              console.log(this.card);
            }
          );
      }
    );
  }

  onDelete() {
    this.cardsService.deleteCard(this.card)
    this.router.navigate(['/cards'], {relativeTo: this.route});
  }

}
