import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private username:string;
  private clientid = 'ad64f1a34d8ef30c6bf2';
  private clientsecret = 'cf54bcbbdf5160221d81bdc5bb3bb096d48980dc';
  repository!: string;

  constructor(private http: HttpClient) {
    console.log("service  here!");
    this.username = 'gracenyutu';
  }

  getUserInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "?client_secret=" + this.clientsecret)
    .pipe(
    map((res: any) => (res)
    ),
    catchError(this.errorHandler)
    )
    ;
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || 'Server error')
  }

  getUserRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos" +"?client_id=" + this.clientid + "?client_secret=" + this.clientsecret)
    .pipe(
    map((res: any) => (res)
    ),
    catchError(this.errorHandler)
    )
    ;
  }

  updateUser(username:string){
    this.username = username
  }

  updateRepo(repository:string){
    this.repository = repository
  }
}
