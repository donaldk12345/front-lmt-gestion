import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { ResponseService } from '../services/response.service';
import { Router } from '@angular/router';
import { url } from 'environments/url';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

const API_URI= `${environment.BASE_URL}`
@Component({
  selector: 'credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent  implements OnInit{
 addCreditForm: FormGroup = Object.create(null);

  credits: any=[]=[];
  comptes: any = [] = [];

  constructor(private http: ResponseService, private router: Router,private formBuilder: FormBuilder) {

    // this.user = JSON.parse(this.http.getUser());

  }

    ngOnInit(): void{

      this.getCredit();
      this.getCompte();
        this.addCreditForm=  this.formBuilder.group({

        credit: new FormControl('', [Validators.required]),
        compte_id : new FormControl('', [Validators.required])

    });

  }
      getCredit(){
    this.http.getElement(API_URI + url.credit).subscribe({
      next: data => {
        if (data) {

          this.credits = data;

               console.log("credits", this.credits);

        } else {

        }
      }
    })
      }
      getCompte(){
    this.http.getElement(API_URI + url.compte).subscribe({
      next: data => {
        if (data) {

          this.comptes = data;

               console.log("comptes", this.comptes);

        } else {

        }
      }
    })
    }

   addCredit() {
    let creditRequest = {

      credit: this.addCreditForm.value.credit,
      compte_id: this.addCreditForm.value.compte_id,

    }

    this.http.postElement(API_URI + url.credit, creditRequest).subscribe((data) => {
      console.log("data", data);
      this.addCreditForm.reset();
      this.getCredit();
    }, error => {
      console.log(error);
    })

  }
}
