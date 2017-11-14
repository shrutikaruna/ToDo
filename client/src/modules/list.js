import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router, AuthService, ToDos)
export class Wall {
  constructor(router) {
	this.router = router;
          this.message = 'List';
  }

  logout(){
    this.router.navigate('home');
    sessionStorage.removeItem('user');
    this.auth.logout();
  }
}