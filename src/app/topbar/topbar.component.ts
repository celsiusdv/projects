import { Component, OnInit } from '@angular/core';
import {faHouseChimney, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {Clipboard} from '@angular/cdk/clipboard';
@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  home=faHouseChimney;
  envelope=faEnvelope;
  github=faGithub;
  mail:string="";
  contactBtnClicked:boolean=false;
  constructor(private clipboard: Clipboard) { }

  ngOnInit(): void {
  }
  public setEmail():void{
    this.contactBtnClicked=true;
    this.mail="emailtocopy@mail.com"
  }
  public copyEmail():void{
    this.clipboard.copy(this.mail);
  }
}
