import { Component, OnInit } from '@angular/core';
import profils from './profil-list';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  public profilList= profils;
  constructor() { }

  ngOnInit(): void {
    console.log(this.profilList)
  }

}
