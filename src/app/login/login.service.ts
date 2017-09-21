import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { AngularFireAuth } from "angularfire2/auth/auth";
import { Router } from "@angular/router";
import { Subject, BehaviorSubject } from 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { AuthInfo } from "app/shared/auth-info";

@Injectable()
export class LoginService {
	static UNKNOWN_USER = new AuthInfo(null, null);
	public authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(LoginService.UNKNOWN_USER);

	constructor(private afAuth: AngularFireAuth, private router: Router) { }

	autenticarLogin(email: string, senha: string): Observable<AuthInfo> {
        return this.fromFirebaseAuthPromise(this.afAuth.auth.signInWithEmailAndPassword(email, senha));
    }

	cadatrar(nome, email, senha) {
		return this.fromFirebaseAuthPromise(this.afAuth.auth.createUserWithEmailAndPassword(email, senha));
	}

	fromFirebaseAuthPromise(promise): Observable<any> {

		const subject = new Subject<any>();

		promise
			.then(res => {
				const authInfo = new AuthInfo(
					this.afAuth.auth.currentUser.uid,
					this.afAuth.auth.currentUser.email);

				this.authInfo$.next(authInfo);
				subject.next(res);
				subject.complete();
				localStorage.setItem('currentUser', JSON.stringify(authInfo));
			},
			err => {
				this.authInfo$.error(err);
				subject.error(err);
				subject.complete();
			});

		return subject.asObservable();
	}


	logout() {
        this.afAuth.auth.signOut();
        this.authInfo$.next(LoginService.UNKNOWN_USER);
        localStorage.removeItem('currentUser');
        this.router.navigate(['/filmes']);
    }
}
