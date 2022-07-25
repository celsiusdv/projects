import { Component, OnInit } from '@angular/core';
import {faGithub} from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-snakegame',
  templateUrl: './snakegame.component.html',
  styleUrls: ['./snakegame.component.css']
})
export class SnakegameComponent implements OnInit {
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
