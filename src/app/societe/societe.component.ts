import { Component, OnInit } from '@angular/core';
import societes from './societe-list';

@Component({
  selector: 'app-societe',
  templateUrl: './societe.component.html',
  styleUrls: ['./societe.component.css']
})
export class SocieteComponent implements OnInit {

  public societeList= societes;
  constructor() { }

  ngOnInit(): void {
    console.log(this.societeList)
  }

}
