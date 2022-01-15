import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  public clientsList: any = [];
  
  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    //console.log(this.categoriesList)
    this.clientService.all().subscribe(
      res => this.clientsList = res
    );
  }
}
