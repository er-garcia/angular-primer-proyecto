import { Component, Input, EventEmitter,Output } from '@angular/core';
import { Character } from '../../interfaces/character.inteface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDeleteCharacter: EventEmitter<number> = new EventEmitter();

  @Output()
  public deleteById: EventEmitter<string> = new EventEmitter();

  @Input()
  public listPersonajes : Character[] = [{
    name: 'Trunks',
    power: 500
  }]

  // emitCharacter(index: number): void {
  //   //TODO: Emitir el ID del personaje
  //   this.onDeleteCharacter.emit(index);
  //   console.log({index});
  // }

  emitCharacter(id?: string): void {
    //TODO: Emitir el ID del personaje
    if ( !id ) return ;
    this.deleteById.emit(id);
    console.log({id});
  }
}
