import { Component, OnInit } from '@angular/core';
import{faScrewdriverWrench} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'underbar',
  templateUrl: './underbar.component.html',
  styleUrls: ['./underbar.component.css']
})
export class UnderbarComponent implements OnInit {
  tool=faScrewdriverWrench;
  constructor() { }

  ngOnInit(): void {
  }

}
