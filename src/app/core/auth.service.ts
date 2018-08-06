import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus: boolean = false;
  redirectUrl: string = '/dashboard';
  loggedIn: any;

  constructor(public afAuth: AngularFireAuth) {
    this.loggedIn = this.afAuth.auth.currentUser;
  }

  /**
   * Getter for loggedInStatus
   * @return boolean
   */
  getLoggedInStatus () : boolean {
    return this.loggedInStatus;
  }

  /**
   * Setter for loggedInStatus
   * @param isLoggedIn 
   */
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
   * Interacts with Firebase to do a registration of new user
   * @param email 
   * @param password 
   */
  register(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(data => { resolve(data) })
        .catch(err => { reject(err) });
    });
  }

  /**
   * Send password reset link to the user
   * @param email Email Address of the user
   */
  sendResetPasswordLink(email: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.sendPasswordResetEmail(email)
        .then(data => { resolve(data) })
        .catch(err => { reject(err) });
    });
  }

  /**
   * Interacts with Firebase to logout user
   */
  logout() {
    sessionStorage.userToken = '';
    return this.afAuth.auth.signOut();
  }

  getCurrentUser() {
    return this.afAuth.auth.currentUser;
  }
}
