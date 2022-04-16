import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'gitsearch';
  mySubscription: Subscription = new Subscription;

  constructor (private apiService: ApiService){}

  repos = []
  ngOnInit(): void{
  this.getPublicReposWithPromise()
 }
  ngOnDestroy(): void {
  this.mySubscription.unsubscribe();
 }
 getPublicReposWithPromise():void{
   this.apiService.getRepo('gracenyutu').then(( data: any)=>{
     console.log(data)
   })
 }
}
