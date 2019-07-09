import { Component, OnInit } from '@angular/core';
import { ApiService, User } from 'src/app/shared/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  public user: User;
  public identifier: any;

  ngOnInit() {
    this.route.params.subscribe(miParams => this.identifier = miParams.id);
    this.api.getUser$(this.identifier).subscribe(response => this.user = response);
  }

}
