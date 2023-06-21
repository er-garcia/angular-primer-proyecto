import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman','Ironman','Hulk','She Hulk','Thor','Black Panter','Black Widow','Hawkeye']
  public deleteHero?: string;

  removeLastHeroe():void{
    this.deleteHero = this.heroNames.pop();
  }
}
