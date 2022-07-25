import { Component, OnInit } from '@angular/core';
import {faGithub} from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-chatapp',
  templateUrl: './chatapp.component.html',
  styleUrls: ['./chatapp.component.css']
})
export class ChatappComponent implements OnInit {
  github=faGithub;
  gitlink="https://docs.github.com/en/pages";
  implementations:string[]=[
    "random item",
    "random item",
    "random item",
    "random item"
  ];
  constructor() { }

  ngOnInit(): void {
  }
  public openTab():void{
    window.open(this.gitlink);
  }
}
