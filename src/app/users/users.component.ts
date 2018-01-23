import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// AppComponent hérite de component !
export class AppComponent {
  title = 'simplon';
  subTitle = '';
  buttonColor = 'rouge';
  menuCouleur = '';
  voir = true;
  description = 'Hello World III';
  user = {
    name: 'Essai',
    age: 4,
    // objet date != string, number, ...
    birthday: new Date('1976/01/01')
  };
  // récupère description et l'affiche en majuscule
  getDescription() {
    return this.description.toUpperCase();
  }
  // change le titre principal (ne marche qu'une fois)
  changeTitle($event) {
    this.title = 'Promo LaPoste 3';
  }
  // change la couleur du bouton (bleu, puis rouge, puis bleu ... à chaque clic)
  changeColor() {
    if (this.buttonColor === 'rouge') {
      this.buttonColor = 'bleu';
    } else {
      this.buttonColor = 'rouge';
    }
  }
  // affivhe ou non le titre principal
  checkVisible($event) {
    if (this.voir === true) {
      this.subTitle = "C'té caché !!";
      this.voir = false;
    } else {
      this.voir = true;
      this.subTitle = '';

      // changeColorByList($event) {
      // this.couleur = $event.target.value;
      // }
    }
  }
}
