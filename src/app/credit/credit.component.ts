import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { ResponseService } from '../services/response.service';
import { Router } from '@angular/router';
import { url } from 'environments/url';

const API_URI= `${environment.BASE_URL}`
@Component({
  selector: 'credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent  implements OnInit{


  credits: any=[]=[];

  constructor(private http: ResponseService, private router: Router) {

    // this.user = JSON.parse(this.http.getUser());

  }

    ngOnInit(): void{

      this.getCredit();
    //console.log('user', this.user);

  }
      getCredit(){
    this.http.getElement(API_URI + url.credit).subscribe({
      next: data => {
        if (data) {

          this.credits = Object.values(data);

               console.log("credits", this.credits);

        } else {

        }
      }
    })
    }
}
