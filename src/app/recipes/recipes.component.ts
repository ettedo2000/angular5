import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
    listItemsName = ['Meat', 'Vegetables', 'Sweets', 'Healthy'];
    defaultImage = '../assets/images/defaultImage.png';
    image1 = '../assets/images/swissFood1.jpg';
    image2 = '../assets/images/italianFood.jpeg';
    image3 = '../assets/images/germanFood.jpeg';
    image4 = '../assets/images/frenchFood.jpg';
    image5 = '../assets/images/summerFood.jpeg';
    image6 = '../assets/images/healthyFood.jpg';
    image7 = '../assets/images/holidayFood.jpg';
    image8 = '../assets/images/bakeryFood.jpeg';
    image9 = '../assets/images/fullDinners.jpeg';
    image10 = '../assets/images/partyFood.jpeg';
    image11 = '';
    image12 = '';
    offset = 100;

  constructor() { }

  ngOnInit() {
      window.scrollTo(0, 0)
  }

}
