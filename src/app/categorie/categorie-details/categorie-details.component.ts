import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie.service';


@Component({
  selector: 'app-categorie-details',
  templateUrl: './categorie-details.component.html',
  styleUrls: ['./categorie-details.component.css']
})
export class CategorieDetailsComponent implements OnInit {

  public categories?: any;
  constructor(private route: ActivatedRoute,private categorieService:CategorieService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
     
         const categorieId = params.get('id');
         this.categorieService.get(categorieId!).subscribe(categories => this.categories = categories);
        });
      }
    
  }


