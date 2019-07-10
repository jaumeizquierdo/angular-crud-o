import { Component, OnInit } from '@angular/core';
import { ApiService, User } from 'src/app/shared/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})

export class UserAddComponent implements OnInit {

  public user: User;

  public userData: User = {
    _id: this.uniqueID(),
    id: '',
    name: '',
    age: 0,
    gender: '',
    company: '',
    email: '',
    phone: '',
    address: ''
  };

  private uniqueID() {
    const thisMS: number = Date.now();
    const shake = Math.random();
    let unique: string = Math.pow(thisMS, shake).toString();
    unique = unique.toString().replace('.', thisMS.toString());
    return unique;
  }

  constructor( private api: ApiService, private router: Router ) { }

  ngOnInit() {
  }

  addUser() {

    this.user = Object.assign({}, this.userData);
    this.api.addUser$(this.user).subscribe(response => { const id = response.id;
      this.router.navigate(['/user', id]); }, // router redirecciona a la ficha de usuario
      (err) => {console.log(err); });
  }

}
