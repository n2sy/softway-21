import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { EnfantComponent } from './enfant/enfant.component';
import { CvComponent } from './cv/cv.component';
import { ListeComponent } from './liste/liste.component';
import { ItemComponent } from './item/item.component';
import { DetailComponent } from './detail/detail.component';
import { DirectComponent } from './direct/direct.component';
import { MswordComponent } from './msword/msword.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { CustomDirDirective } from './custom-dir.directive';
import { ShortPipe } from './short.pipe';
import { FilterPipe } from './filter.pipe';
import { NoImagePipe } from './no-image.pipe';
import { FirstService } from './services/first.service';
import { RecruterComponent } from './recruter/recruter.component';
import { HomeComponent } from './home/home.component';
import { ROUTING_MERS } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    EnfantComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailComponent,
    DirectComponent,
    MswordComponent,
    ManageServersComponent,
    CustomDirDirective,
    ShortPipe,
    FilterPipe,
    NoImagePipe,
    RecruterComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
  BrowserModule,
    FormsModule,
    ROUTING_MERS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
