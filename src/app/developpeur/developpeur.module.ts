import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeveloppeurRoutingModule } from './developpeur-routing.module';
import { DeveloppeurComponent } from './developpeur.component';


@NgModule({
  declarations: [
    DeveloppeurComponent
  ],
  imports: [
    CommonModule,
    DeveloppeurRoutingModule
  ]
})
export class DeveloppeurModule { }
