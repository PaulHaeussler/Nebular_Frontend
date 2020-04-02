import { SpaceComponent } from './../space/space.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public hide = true;
  public username;
  public password;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public confirmLogin() {
    console.log("in confirmLogin");
    this.router.navigate(['/space'])
  }

}
