import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from 'environments/environment';
import { url } from 'environments/url';
import { Observable } from 'rxjs';
const API_URI= `${environment.BASE_URL}/api/`;
@Injectable({
  providedIn: 'root'
})
export class ResponseService {
 constructor(private http: HttpClient,@Inject(PLATFORM_ID) private platformId: Object) { }



   postElement(url: string, data: any): Observable<any> {
   return this.http.post(url, data);
  }

    getElement(url: string): Observable<any> {

   return this.http.get(url);
  }


    putElement(url: string, data: any): Observable<any> {
    return this.http.put(url, data);
  }
    deleteElement(url: string): Observable<any> {
    return this.http.delete(url);
  }

    sessionsetJson(variable: string, valeur: any): void {
    let js: string;
    js = JSON.stringify(valeur);
    sessionStorage.setItem(variable, js);
  }


  sessionclear(): void {
    sessionStorage.clear();
  }

  sessionget(variable: string): String | any {
    if(isPlatformBrowser(this.platformId)){
    return sessionStorage.getItem(variable);
    }

    return;

  }
    sessionremove(variable: string): void {
    sessionStorage['remove'](variable);
  }



  sessionset(variable: string, valeur: string): void {
    if(isPlatformBrowser(this.platformId)){
      sessionStorage.setItem(variable, valeur);
    }
  }
    //Pour envoyer le token
  getToken(): String |any{
    return this.sessionget('token');
  }

  getUserName(): String |any{
    return this.sessionget('name');
  }


  getUser(): any {
    return this.sessionget('user');
  }

}
