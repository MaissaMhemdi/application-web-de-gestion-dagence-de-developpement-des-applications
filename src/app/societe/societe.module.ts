import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocieteRoutingModule } from './societe-routing.module';
import { SocieteComponent } from './societe.component';


@NgModule({
  declarations: [
    SocieteComponent
  ],
  imports: [
    CommonModule,
    SocieteRoutingModule
  ]
})
export class SocieteModule { }
