import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes'; 

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    // new Quote (1, 'Cynthia', 'Love', 'I love you for all that you are, all that you have been and all that you will be', 'Cynthia Ouma', new Date(2021,12,3), 0, 0),
    // new Quote (2, 'Leone', 'Technology', 'Technology is the best when it brings people together','Bill Gates', new Date(2022,1,1), 0, 0),
    // new Quote (3, 'Lawrence', 'Motivational', 'The greatest glory in living lies not in never falling but in rising every time we fail','Maya Angelou',new Date(2021,3,1), 0, 0)

  constructor() { }

  ngOnInit(): void {
  }

}
