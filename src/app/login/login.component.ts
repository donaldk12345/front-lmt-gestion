import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseService } from '../services/response.service';
import { environment } from 'environments/environment';
import { url } from 'environments/url';
const API_URI= `${environment.BASE_URL}`
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup = Object.create(null);
  errorMessage: any;
  user: any;
  constructor(private formBuilder: FormBuilder, private router: Router,private http:ResponseService) {
    this.user = JSON.parse(this.http.getUser());
  }

  ngOnInit(): void {


    this.loginForm =  this.formBuilder.group({

        email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
        password : new FormControl('', [Validators.required, Validators.minLength(4)])
    });


  }


  loginUser(){
    let loginRequest= {
      email :this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    return this.http.postElement(API_URI + url.login, loginRequest).subscribe(data => {

      console.log(data);
      this.http.sessionset('token', JSON.stringify(data.token));
      this.http.sessionset('user', JSON.stringify(data.user));

      this.http.sessionset('name', JSON.stringify(data.user.name));
      this.router.navigate(['/']);
        // this.reloadPage();
    }, error => {
      console.log(error);
      this.errorMessage = error.error.message;

    }
    )



  }



  get email(){
     return this.loginForm.controls['email'];
  }
  get password(){
    return this.loginForm.controls['password'];
 }


}
