import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../shared/authentication-service";
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public authService: AuthenticationService, 
    public router:Router,
    public auth: AngularFireAuth
    ) { }

  ngOnInit() {
  }
  logout(){
    this.authService.SignOut()
    this.router.navigateByUrl("login")
  }
}
