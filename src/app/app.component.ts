import { Component, OnInit } from '@angular/core';
import { ResponseService } from './services/response.service';
import { Router } from '@angular/router';
import { window } from 'rxjs';
import { environment } from 'environments/environment';
import { url } from 'environments/url';
const API_URI= `${environment.BASE_URL}`
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'myangular';
  val:boolean= false;
    user: any;
  name: String = '';
  currentUser: any;

  users: any;
  constructor(private http: ResponseService, private router: Router) {

    // this.user = JSON.parse(this.http.getUser());

  }

  ngOnInit(): void{

    this.name = JSON.parse(this.http.getUserName());
    this.isUser();
    this.user = JSON.parse(this.http.getUser());
    this.getUsers();
    //console.log('user', this.user);

  }

  isUser() {
    return this.http.sessionget('name');
  }

    logOut() {
      this.http.sessionclear();
      this.router.navigate(['/login']);


    }

  toggleNav() {

  }

    onChangeEvent(event: any) {


    }

  IsLogin():boolean {
    const user = JSON.parse(this.http.getUser());

    if(user) {
      return true;
    }

      return false;

  }

    getUsers(){
    this.http.getElement(API_URI + url.users).subscribe({
      next: data => {
        if (data) {
          console.log("user", data);
          this.users = data;

        } else {

        }
      }
    })
    }
}
