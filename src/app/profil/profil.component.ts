import { Component, OnInit } from '@angular/core';
import { ProfilsService } from '../services/profils.service';


import profils from './profil-list';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {


  public profilsList: any = [];
  
  constructor(private profilService:ProfilsService) { }

  ngOnInit(): void {
    //console.log(this.categoriesList)
    this.profilService.all().subscribe(
      res => this.profilsList = res
    );
  }


}
