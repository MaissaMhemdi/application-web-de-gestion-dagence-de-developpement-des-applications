import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeveloppeursService } from 'src/app/services/developpeurs.service';
import developpeurs from '../list-developpeur';

@Component({
  selector: 'developpeur-details-developpeur',
  templateUrl: './details-developpeur.component.html',
  styleUrls: ['./details-developpeur.component.css']
})
export class DetailsDeveloppeurComponent implements OnInit {

  public developpeurs?: any;
  constructor(private route: ActivatedRoute, private developpeursService: DeveloppeursService) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
     
         const developpeurId = params.get('id');
         this.developpeursService.get(developpeurId!).subscribe(developpeurs => this.developpeurs = developpeurs);
        });
      }
    


}
