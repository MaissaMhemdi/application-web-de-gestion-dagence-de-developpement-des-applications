import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import developpeurs from '../list-developpeur';

@Component({
  selector: 'developpeur-details-developpeur',
  templateUrl: './details-developpeur.component.html',
  styleUrls: ['./details-developpeur.component.css']
})
export class DetailsDeveloppeurComponent implements OnInit {

  public developpeurs?: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
        const developpeursId= params.get("id");
        this.developpeurs =developpeurs.filter(developpeurs => developpeurs.id === developpeursId)[0]
      });
  }

}
