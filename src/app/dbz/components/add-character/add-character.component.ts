import { Component, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.inteface';


@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public personaje: Character ={
    name: '',
    power: 0
  }

  emitCharacter(): void {

    console.log(this.personaje);
    if (this.personaje.name.length === 0 || this.personaje.power < 0) {
      console.log('Error: Los datos del personaje no pueden estar vacíos')
      return;
    }

    this.onNewCharacter.emit(this.personaje);
    this.personaje = {name: '', power: 0} ;
  }
}
