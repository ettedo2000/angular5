import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-carousel-slider',
  templateUrl: './carousel-slider.component.html',
  styleUrls: ['./carousel-slider.component.css']
})
export class CarouselSliderComponent implements OnInit {
    items: Observable<any[]>;

    constructor(db: AngularFirestore, config: NgbCarouselConfig) {
        this.items = db.collection('images').valueChanges();
    }
  ngOnInit() {
  }
}
