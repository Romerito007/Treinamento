import { Injectable } from '@angular/core';
import { AuthInfo } from "app/shared/auth-info";
import { Observable, Subject } from "rxjs";
import { FirebaseListObservable } from "angularfire2/database/firebase_list_observable";
import { AngularFireDatabase } from "angularfire2/database/database";
import { Favorito } from "app/favorito";

@Injectable()
export class FavoritosService {

  private favoritosRef: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.favoritosRef = this.db.list('favoritos') as FirebaseListObservable<Favorito[]>;
  }

  cadastrar(keyFilme2): Observable<any> {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return this.firebaseUpdate({ keyUsuario: currentUser.$uid, keyFilme: keyFilme2 });
  }

  remover(key): Observable<any> {
    return this.firebaseRemove(key);
  }

  getFavoritoById(): Observable<Favorito[]> {
    return this.db.list('favoritos', { 
      query: {
      startAt: localStorage.$uid, 
      endAt: localStorage.$uid } });
  }

  firebaseUpdate(dataToSave) {

    const subject = new Subject();
    this.favoritosRef.push(dataToSave)
      .then(
      val => {
        subject.next(val);
        subject.complete();
      },
      err => {
        subject.error(err);
        subject.complete();
      }
      );
    return subject.asObservable();
  }

  firebaseRemove(key) {
    const subject = new Subject();
    this.favoritosRef.remove(key)
      .then(
      val => {
        subject.next(key);
        subject.complete();
      },
      err => {
        subject.error(err);
        subject.complete();
      }
      );
    return subject.asObservable();
  }

}
