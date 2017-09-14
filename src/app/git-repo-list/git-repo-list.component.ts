import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-git-repo-list',
  templateUrl: './git-repo-list.component.html',
  styleUrls: ['./git-repo-list.component.css'], providers: [UserService]
})
export class GitRepoListComponent implements OnInit {
  repos: any;
  errorMessage: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getusers();

  }

  getusers() {
    this.userService.getUsers()
      .subscribe(
      repos => this.repos = repos,
      error => this.errorMessage = <any>error);
    console.log(this.repos);
    console.log("Hi");
  }

}
