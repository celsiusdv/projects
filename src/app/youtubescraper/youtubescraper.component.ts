import { Component, OnInit } from '@angular/core';
import {faGithub} from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-youtubescraper',
  templateUrl: './youtubescraper.component.html',
  styleUrls: ['./youtubescraper.component.css']
})
export class YoutubescraperComponent implements OnInit {
  github=faGithub;
  gitlink="https://docs.github.com/en/pages";
  implementations:string[]=[
    "Threads",
    "Exceptions",
    "JavaFx Classes",
    "Selenium framework",
    "Arrays, Arraylist",
    "Loops",
    "Conditionals"
  ];
  constructor() { }

  ngOnInit(): void {
  }
  public openTab():void{
    window.open(this.gitlink);
  }
}
