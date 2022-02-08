import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes'; 

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quotes[] = [
    new Quotes (1, 'Martin', 'Love', 'I love you for all that you are, all that you have been and all that you will be', 'Martin Omollo', new Date(2021,12,3), 0, 0),
    new Quotes (2, 'David', 'Technology', 'Technology is the best when it brings people together','David Odawa', new Date(2022,1,1), 0, 0),
    new Quotes (3, 'Evans', 'Motivational', 'The greatest glory in living lies not in never falling but in rising every time we fail','Maya Angelou',new Date(2021,3,1), 0, 0)

  ]
  toggleDetails(index:any){this.quotes[index].showDescription=!this.quotes[index].showDescription}
   addNewQuote(quote:any){
     let quoteLength = this.quotes.length;
     quote.id = quoteLength + 1;
     quote.dateposted = new Date(quote.dateposted);
     this.quotes.push(quote)
   }

  constructor() { }

  ngOnInit(): void {
  }

}
