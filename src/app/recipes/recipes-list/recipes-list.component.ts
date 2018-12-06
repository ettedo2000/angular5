import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
    swiss: Observable<any[]>;

  constructor(db: AngularFirestore) {
      this.swiss = db.collection('swiss').valueChanges();
  }

  ngOnInit() {
  }

}
