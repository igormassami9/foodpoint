import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../shared/authentication-service";
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  produtos:any;
  constructor(
    public authService: AuthenticationService, 
    public router:Router,
    public auth: AngularFireAuth,
    firestore: AngularFirestore
    ) {console.log(router.url);
    this.produtos = firestore.collection('produtos').valueChanges();
    console.log(this.produtos)}

  ngOnInit() {
  }
  logout(){
    this.authService.SignOut()
    this.router.navigateByUrl("login")
  }
}
