
export class AuthInfo {

    constructor(public $uid: string, public email: string) { }

    isLoggedIn() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser != null) this.email = currentUser.email;
        if (currentUser != null) this.$uid = currentUser.$uid;
        return !!currentUser;
    }

    getEmail() {
        return this.email;
    }

    getKey() {
        return this.$uid;
    }

    isAdmin() {
        return this.email != null && this.isLoggedIn && this.email == "admin@hotmail.com";
    }

}