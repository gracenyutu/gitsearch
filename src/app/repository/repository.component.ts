import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repos: any;
  repository: any;

  constructor(private apiService: ApiService ) {
  }

  findUser(){
    this.apiService.updateRepo(this.repository);
    this.apiService.getUserRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }
  ngOnInit(): void {
  }

}
