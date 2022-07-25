import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UnderbarComponent } from './underbar/underbar.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SnakegameComponent } from './snakegame/snakegame.component';
import { YoutubescraperComponent } from './youtubescraper/youtubescraper.component';
import { ChatappComponent } from './chatapp/chatapp.component';
const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'youtubescraper',component:YoutubescraperComponent},
  {path:'chatapp',component:ChatappComponent},
  {path:'snakegame',component:SnakegameComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    WelcomeComponent,
    UnderbarComponent,
    HomeComponent,
    SnakegameComponent,
    YoutubescraperComponent,
    ChatappComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
