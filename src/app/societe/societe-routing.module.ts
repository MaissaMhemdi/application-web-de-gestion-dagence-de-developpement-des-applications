import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocieteDetailsComponent } from './societe-details/societe-details.component';
import { SocieteComponent } from './societe.component';

const routes: Routes = [{ path: '', component: SocieteComponent }, 
                        { path: ':id', component: SocieteDetailsComponent }
                      ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    SocieteDetailsComponent
  ]
})
export class SocieteRoutingModule { }
