import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { resolve } from 'path';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  /**
   * Interacts with Firebase to do the login
   * @param email 
   * @param password 
   */
  login(email: string, password: string) {
    return new Promise( (resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then( data => { resolve(data) } )
      .catch( err => { reject(err) } );
    });
  }
}
