
import { Component } from '@angular/core';
import { Character } from '../interfaces/character.inteface';
import { mainModule } from 'process';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  constructor( private dbzService: DbzService ) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  deletePersonaje( id: string): void {
    this.dbzService.deleteCharacterById( id );
  }

  newPersonaje( personaje: Character): void {
    this.dbzService.addCharacter( personaje );
  }
}
