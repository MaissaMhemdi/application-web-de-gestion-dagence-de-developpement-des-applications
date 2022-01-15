import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../services/categorie.service';
import categories from './categorie-list';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  public categoriesList: any = [];
  
  constructor(private categorieService:CategorieService) { }

  ngOnInit(): void {
    //console.log(this.categoriesList)
    this.categorieService.all().subscribe(
      res => this.categoriesList = res
    );
  }

}