import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  public page_title: String;
  public user:User;

  constructor(
    private _userServices: UserService //$$$$
  ) {
    this.page_title= 'Registrate';
    this.user = new User(1,'','','ROLE_USER','','','','');
   }

  ngOnInit(): void {
    console.log('Componente de registro lanzado');
    console.log(this._userServices.test());
  }
  onSubmit(form){
    this._userServices.register(this.user).subscribe(
      response => {
        console.log(response);
          form.reset();
      },
      error => {
        console.log(<any>error);
        form.reset();
      }
    );
  }

}
