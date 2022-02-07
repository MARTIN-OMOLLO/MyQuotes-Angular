import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MYQUOTES'
  quote:string[];

  constructor(){
    this.quote=[ 'love much' ,'care more',
    'In the we will not only have to repent for the sins of bad people but also appaling silence of good people'];
  }
}