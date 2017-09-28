import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chuck-norris',
  templateUrl: './chuck-norris.component.html',
  styleUrls: ['./chuck-norris.component.css']
})
export class ChuckNorrisComponent implements OnInit {

  randomJoke: any = {};

  constructor(
    private httpThang: HttpClient
  ) { }

  ngOnInit() {
      this.getRandomJoke();
  }

  getRandomJoke() {
      this.httpThang.get('http://api.icndb.com/jokes/random')
        .subscribe(
          // subscribe's 1st callback -> SUCCESS!!
          (resultingInfo: any) => {
              // console.log(resultingInfo);
              this.randomJoke = resultingInfo.value;
          },

          // subscribe's 2nd callback -> ERROR!!
          (errorInfo) => {
              console.log(errorInfo)
          }
        );
  } // getRandomJoke()

}
