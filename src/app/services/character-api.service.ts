import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CharacterApiService {

  constructor(
    private httpThang: HttpClient
  ) { }

  getCharacters() {
      // GET  https://ih-crud-api.herokuapp.com/characters

      // return the observable so that components can subscribe
      return this.httpThang.get('https://ih-crud-api.herokuapp.com/characters');
  }

  postCharacter(characterInfo) {
      // POST  https://ih-crud-api.herokuapp.com/characters

      return this.httpThang.post(
          'https://ih-crud-api.herokuapp.com/characters',
          characterInfo
      );  // 2nd argument for POSTs -> the data to send the API
  }       // ("name", "weapon" & "occupation" in this case)

} // CharacterApiService
