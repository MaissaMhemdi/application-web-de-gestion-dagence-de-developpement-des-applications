import { Component, OnInit } from '@angular/core';
import developpeurs from './list-developpeur';

@Component({
  selector: 'app-developpeur',
  templateUrl: './developpeur.component.html',
  styleUrls: ['./developpeur.component.css']
})
export class DeveloppeurComponent implements OnInit {
  public developpeurList= developpeurs;
  constructor() { }

  ngOnInit(): void {
    console.log(this.developpeurList)
  }

}

