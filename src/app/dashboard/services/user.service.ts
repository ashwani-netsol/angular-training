import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { User } from '../../core/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  collection: AngularFirestoreCollection<User>;

  constructor(db: AngularFirestore) {
    this.collection = db.collection<User>('users');
  }

  getUsers () {
    return this.collection.valueChanges();
  }
}
