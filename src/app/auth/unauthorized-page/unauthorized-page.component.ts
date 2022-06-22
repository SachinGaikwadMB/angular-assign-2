import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unauthorized-page',
  templateUrl: './unauthorized-page.component.html',
  styleUrls: ['./unauthorized-page.component.scss']
})
export class UnauthorizedPageComponent implements OnInit {
  imageSrc = 'assets/images/error401.gif'; 
  imageAlt = 'women';
  constructor() { }

  ngOnInit(): void {
  }

}
