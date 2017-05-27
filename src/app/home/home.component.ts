import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {

  data;
  users;
  mainUser = localStorage.getItem('currentUser');



  constructor(
    private userService: UserService,
    private router: Router
  ) { }


    getPeople() {
    this.userService.getUsers().then(res => {
      this.users = res.data;
      
      for(var i = 0; i <= this.users.length - 1; i++){
        if(this.users[i].avatar == 'none'){
          this.users[i].avatar = 'https://vignette2.wikia.nocookie.net/angrybirds/images/3/36/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9_%D0%B7%D0%BE%D0%BC%D0%B1%D0%B8_%D0%B8%D0%B7_%D1%82%D1%83%D1%80%D0%BD%D0%B8%D1%80%D0%B0.png/revision/latest?cb=20131023095813&path-prefix=ru';
        }
      }

      console.log('users', this.users);     
    })
  }

    crushToken(){
    this.mainUser = JSON.parse(this.mainUser);
  }

    friendSelect(friend: any): void {
    console.log("friend", friend);
    this.data = friend;
   
  }

    onLogout(){
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    localStorage.removeItem("numUid");
    this.router.navigate(['/login']);
    console.log('logout', localStorage);
  }


  ngOnInit() {
    this.crushToken();
    this.getPeople();
    console.log('ololo', this.mainUser);


  }




}
