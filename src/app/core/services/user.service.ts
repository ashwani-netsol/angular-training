import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  collection: AngularFirestoreCollection<User>;

  constructor(db: AngularFirestore) {
    this.collection = db.collection<User>('users');
  }

  /**
   * Interact with Firebase to create a collection object
   * @param User user 
   */
  createUser(user: User) : Promise<any> {
    return new Promise( (resolve, reject) => {
      this.collection.add(user)
      .then( data => resolve(data) )
      .catch( err => reject(err));
    });
  }
}
