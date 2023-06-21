import { Injectable } from "@angular/core";
import { v4 as uuid } from 'uuid';

import { Character } from "../interfaces/character.inteface";


console.log(uuid());

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character [] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name:'Goku',
    power: 9500
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 8000
  },
  {
    id: uuid(),
    name: 'Gohan',
    power: 3000
  }];


  addCharacter( personaje: Character): void {
    const newPersonaje: Character = {id: uuid(), ...personaje}
    console.log('MainPageAdd', newPersonaje);
    this.characters.push(newPersonaje);
  }

  onDeleteCharacter ( index: number ): void {
    console.log('MainPageDelete', index);
    this.characters.splice(index,1);
  }

  deleteCharacterById( id:string): void {
    console.log('MainPage - Delete by Id', id);
    this.characters = this.characters.filter( character => character.id !== id );
  }

}
