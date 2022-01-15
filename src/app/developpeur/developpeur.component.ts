import { Component, OnInit } from '@angular/core';
import { DeveloppeursService } from '../services/developpeurs.service';
import developpeurs from './list-developpeur';

@Component({
  selector: 'app-developpeur',
  templateUrl: './developpeur.component.html',
  styleUrls: ['./developpeur.component.css']
})
export class DeveloppeurComponent implements OnInit {
  public developpeurList: any = [];

  constructor(private developpeursService: DeveloppeursService) { }


  ngOnInit(): void {
    //console.log(this.categoriesList)
    this.developpeursService.all().subscribe(
      res => this.developpeurList = res
    );
  }


}

