import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus: boolean = false;
  redirectUrl: string = '/dashboard';

  constructor(public afAuth: AngularFireAuth) {}


  getLoggedInStatus () : boolean {
    return this.loggedInStatus;
  }

  setLoggedInStatus (isLoggedIn: boolean) : void {
    this.loggedInStatus = isLoggedIn
  }

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

  /**
   * Interacts with Firebase to logout user
   */
  logout() {
    return this.afAuth.auth.signOut();
  }

  getCurrentUser() {
    return this.afAuth.auth.currentUser;
  }
}
