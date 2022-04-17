import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any;

  http: any;
  username!: string;
  private clientid = 'ad64f1a34d8ef30c6bf2';
  private clientsecret = 'cf54bcbbdf5160221d81bdc5bb3bb096d48980dc';

  constructor(private apiService: ApiService ) {

  }

  findUser(){
    this.apiService.updateUser(this.username);
    this.apiService.getUserInfo().subscribe(user => {
      console.log(user);
      this.user = user;
    });
  }
  ngOnInit(): void {
    this.getUserInfo()
  }
  getUserInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "?client_secret=" + this.clientsecret)
  }

}
