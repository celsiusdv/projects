import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  title:string="";
  link:string="";
  projects:any[]=[
    {title:"youtube playlist scraper", link:"/youtubescraper"},
    {title:"chat app", link:"/chatapp"},
    {title:"snake game", link:"/snakegame"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
