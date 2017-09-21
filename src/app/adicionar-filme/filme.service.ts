import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth/auth";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs";
import { FirebaseListObservable } from "angularfire2/database/firebase_list_observable";
import { AngularFireDatabase } from "angularfire2/database/database";
import { Filme } from "app/filme";

@Injectable()
export class FilmeService {

  private filmesRef: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.filmesRef = this.db.list('filmes') as FirebaseListObservable<Filme[]>;
  }

  cadastrar(nomeChegado, urlPosterChegado): Observable<any> {
    return this.firebaseUpdate({nome: nomeChegado, urlPoster: urlPosterChegado});
  }

  firebaseUpdate(dataToSave) {

    const subject = new Subject();

    this.filmesRef.push(dataToSave)
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

  getTodosFilmes() : Observable<Filme[]> {
    return this.db.list('filmes') as FirebaseListObservable<Filme[]>;
  }

  getFilmeById(key : string) : Observable<Filme> {
    return this.db.object(`filmes/${key}`);
  }

}
