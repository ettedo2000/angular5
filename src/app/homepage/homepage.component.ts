import { Component, OnInit } from '@angular/core';
import { Home } from './homepage.module';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
    homepageTrational: Home[] = [
        new Home('Swiss',
            'Recipes from Switzerland',
            'swissFood',
            '../assets/images/swissFood.jpg',
            'all'),
        new Home('Italian',
            'Recipes from Italy',
            'italianFood',
            '../assets/images/italianFood.jpeg',
            'all'),
        new Home('Germany',
            'Recipes from Germany',
            'germanFood',
            '../assets/images/germanFood.jpeg',
            'all'),
        new Home('French',
            'Recipes from Franc',
            'frenchFood',
            '../assets/images/frenchFood.jpg',
            'all')
    ];

    homepageBasic: Home[] = [
        new Home('Seasonal',
            'Food for each Season',
            'seasonalFood',
            '../assets/images/summerFood.jpeg',
            'seasons'),
        new Home('Healthy',
            'Recipes from ItalyFoods that heal and strengthen',
            'italianFood',
            '../assets/images/healthyFood.jpg',
            'health'),
        new Home('Holidays',
            'Recipes for all Holidays',
            'holidayFood',
            '../assets/images/holidayFood.jpg',
            'holiday'),
        new Home('Baked Goods',
            'From Pastries to Breads',
            'bakedFood',
            '../assets/images/bakeryFood.jpeg',
            'baked'),
        new Home('Full Dinners',
            'Full Dinners with all the sides',
            'fullDinners',
            '../assets/images/fullDinners.jpeg',
            'dinnerFull'),
        new Home('Party Time',
            'Potlucks and Department Lunches',
            'partyFood',
            '../assets/images/partyFood.jpeg',
            'party')
    ];
  constructor() { }

  ngOnInit() {
  }

}
