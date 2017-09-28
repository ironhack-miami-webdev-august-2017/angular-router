import { Component, OnInit } from '@angular/core';

import { CharacterApiService } from '../../services/character-api.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  characters: any[] = [];
  newCharacter: any = {};

  constructor(
    private characterThang: CharacterApiService
  ) { }

  ngOnInit() {
      // refresh the characters immediately
      this.refreshCharacters();

      // and also every 5 seconds
      setInterval(
        () => {
            this.refreshCharacters();
        },
        5000
      ); // setInterval()
  } // ngOnInit()

  refreshCharacters() {
      // use "characterThang"
      this.characterThang.getCharacters()
        .subscribe(
          (allCharacters: any[]) => {
            this.characters = allCharacters;
            this.characters.sort((a, b) => {
              return b.id - a.id;
            });
          }
        );
  } // refreshCharacters();

  submitCharacter() {
      // pass "newCharacter" to the service to make the POST
      this.characterThang.postCharacter(this.newCharacter)
        .subscribe(
          // SUCCESS callback
          (characterFromApi) => {
              this.characters.unshift(characterFromApi);
              this.newCharacter = {};
          }
        )
  } // submitCharacter()

}
