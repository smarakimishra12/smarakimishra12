import { Component, OnInit, DoCheck } from '@angular/core';
import { Constants } from '../../Constants/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {

  userRegister: any;
  constructor() { }

  ngOnInit(): void {
    this.userRegister = Constants.reguser;
  }
  ngDoCheck(): void {
    if (this.userRegister !== Constants.reguser) {
      this.userRegister = Constants.reguser;
    }
  }

}
