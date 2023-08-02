import { Component } from '@angular/core';
import { environment } from 'environments/environment';
import { ResponseService } from '../services/response.service';
import { Router } from '@angular/router';
import { url } from 'environments/url';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
const API_URI= `${environment.BASE_URL}`
@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contacts: any=[]=[];
   addContactForm: FormGroup = Object.create(null);

  constructor(private http: ResponseService, private router: Router,private formBuilder: FormBuilder,) {


  }

    ngOnInit(): void{

      this.getContact();
       this.addContactForm=  this.formBuilder.group({

        nom: new FormControl('', [Validators.required]),
        numero : new FormControl('', [Validators.required]),
         profession: new FormControl('', [Validators.required]),
          region: new FormControl('', [Validators.required])
    });

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

  addContact() {
    let contactRequest = {

      nom: this.addContactForm.value.nom,
      profession: this.addContactForm.value.profession,
      numero: this.addContactForm.value.numero,
      region: this.addContactForm.value.region
    }

    this.http.postElement(API_URI + url.conatct, contactRequest).subscribe((data) => {
      console.log("data", data);
      this.addContactForm.reset();
      this.getContact();
    }, error => {
      console.log(error);
    })

  }

}
