import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username: any;
  userid: any;
  password: any;
  subscription: Subscription;
  constructor(private regservice: RegisterService) { }

  ngOnInit(): void {
  }
  submit() {
    // console.log('ji', this.userid, this.username, this.password);
    let payload = {
      ['userId'] : this.userid ,
      ['password'] : this.password,
      ['username'] : this.username
     };
     this.regservice.updateUser(payload)
     .subscribe( (d) => {
       console.log(d); 
     });
  }

}
