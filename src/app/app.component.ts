import { Component } from '@angular/core';
import { LoginService } from "app/login/login.service";
import { AuthInfo } from "app/shared/auth-info";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  authInfo: AuthInfo;
  
  constructor(private authService: LoginService) {
    this.authService.authInfo$.subscribe(authInfo =>  this.authInfo = authInfo);
  }


}
