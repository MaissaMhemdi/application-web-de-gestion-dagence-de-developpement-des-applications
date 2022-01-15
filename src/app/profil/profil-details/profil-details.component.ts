import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfilsService } from 'src/app/services/profils.service';



@Component({
  selector: 'app-profil-details',
  templateUrl: './profil-details.component.html',
  styleUrls: ['./profil-details.component.css']
})
export class ProfilDetailsComponent implements OnInit {

  public profils?: any;
  constructor(private route: ActivatedRoute,private profilService:ProfilsService) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
        const profilsId= params.get("id");

        this.profilService.get(profilsId!).subscribe(profils => this.profils =profils);
      });
  }

    

}
