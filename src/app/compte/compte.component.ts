import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { ResponseService } from '../services/response.service';
import { Router } from '@angular/router';
import { url } from 'environments/url';
import { HttpClient } from '@angular/common/http';
const API_URI= `${environment.BASE_URL}`
@Component({
  selector: 'compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit{

    comptes: any=[]=[];

  constructor(private http: ResponseService, private router: Router,private  https:HttpClient) {

    // this.user = JSON.parse(this.http.getUser());

  }

    ngOnInit(): void{

      this.getCompte();
    //console.log('user', this.user);

  }
      getCompte(){
    return this.http.getElement(API_URI + url.compte).subscribe({
      next: data => {
        if (data) {
          console.log("comptes", data);
          this.comptes = Object.values(data);

        } else {

        }
      }
    })
    }

}
