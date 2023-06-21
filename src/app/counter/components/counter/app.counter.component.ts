import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="increaseBy(+1)">+ 1</button>
    <button (click)="increaseBy(10)">Reset</button>
    <button (click)="increaseBy(-1)">- 1</button>
  `
})
export class CounterComponent{

    public title: string = 'Hola Mundo';
    public counter: number = 10;

    increaseBy( value : number) : void{
      if (value == 10)
      {
        this.counter = value;
      }
      else
      {
        this.counter += value;
      }
    }
}
