import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repos: any;
  http: any;
  user: any;

  private clientid = 'ad64f1a34d8ef30c6bf2';
  private clientsecret = 'cf54bcbbdf5160221d81bdc5bb3bb096d48980dc';
  username!: string;

  constructor(private apiService: ApiService ) {
  }

  findUser(){
    this.apiService.updateUser(this.username);
    this.apiService.getUserRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }
  ngOnInit(): void {
    this.getUserRepos()
  }

  getUserRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos" + "?client_id=" + this.clientid + "?client_secret=" + this.clientsecret)
  }

}
