import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  public username = "catguy5000";
  public name = "Max";
  public lastname = "Mustermann";
  public mail = "catguy5000@gmx.de";
  public passwort;
  public language = "English";
  public country = "America";

  constructor() { }

  ngOnInit() {
  }

}
