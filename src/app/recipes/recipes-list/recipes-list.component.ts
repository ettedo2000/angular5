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
    server: string;
    category: Observable<any[]>;

  constructor(db: AngularFirestore, private route: ActivatedRoute) {
      this.category = db.collection(this.route.snapshot.params['id']).valueChanges();
  }

  ngOnInit() {
  }

}
