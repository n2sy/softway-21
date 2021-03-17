import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
import { ListserversComponent } from './listservers/listservers.component';
import { DetailServerComponent } from './detail-server/detail-server.component';
import { EditServerComponent } from './edit-server/edit-server.component';
import { SUB_ROUTING } from './sub-servers.routing';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [AccueilComponent, ListserversComponent, DetailServerComponent, EditServerComponent],
  imports: [
  CommonModule,
    BrowserModule,
    SUB_ROUTING
  ]
})
export class SubServersModule { }
