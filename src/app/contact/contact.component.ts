import { Component } from '@angular/core';
import { environment } from 'environments/environment';
import { ResponseService } from '../services/response.service';
import { Router } from '@angular/router';
import { url } from 'environments/url';
const API_URI= `${environment.BASE_URL}`
@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contacts: any=[]=[];

  constructor(private http: ResponseService, private router: Router) {

    // this.user = JSON.parse(this.http.getUser());

  }

    ngOnInit(): void{

      this.getContact();
    //console.log('user', this.user);

  }
      getContact(){
    this.http.getElement(API_URI + url.conatct).subscribe({
      next: data => {
        if (data) {
          console.log("contacts", data);
          this.contacts = data;

        } else {

        }
      }
    })
    }

}
