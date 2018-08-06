import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Company } from '../../core/models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  collection: AngularFirestoreCollection<Company>;

  constructor(db: AngularFirestore) {
    this.collection = db.collection<Company>('companies');
  }

  list () {
    return this.collection.valueChanges();
  }

  create (company: Company) : Promise<any>{
    return this.collection.add(company);
  }
}
