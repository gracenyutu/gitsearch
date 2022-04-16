import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'Gitsearch';
  mySubscription: Subscription = new Subscription;

  name = new FormControl()

  constructor (private apiService: ApiService){}

  repos: any = []
  ngOnInit(): void{
    //console.log(this.name.value)
 }
  ngOnDestroy(): void {
  this.mySubscription.unsubscribe();
 }
 async getPublicReposWithPromise(username: string):Promise<void>{
   const repos = await this.apiService.getRepo(username)
   this.repos = repos
   }

   searchRepos(){
    let username = this.name.value;
    this.getPublicReposWithPromise(username)
    return false;
   }
}

