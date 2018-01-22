import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// AppComponent hérite de component !
export class AppComponent {
  title = 'app';
  buttonColor = 'yellow';
  description = 'Hello World III';
  user = {
    name: 'Essai',
    age: 4,
    // objet date != string, number, ...
    birthday: new Date('1976/01/01')
  };
  getDescription() {
    return this.description.toUpperCase();
  }

  changeTitle($event) {
    this.title = 'Promo LaPoste 3';
  }

  changeColor() {
    if (this.buttonColor === 'rouge') {
      this.buttonColor = 'bleu';
    } else {
      this.buttonColor = 'rouge';
    }
  }
}
