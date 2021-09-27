import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  viewSignup :boolean = true

  constructor() { }

  ngOnInit(): void {
  }


  changeViewClick(){
    this.viewSignup = !this.viewSignup
  }
}
