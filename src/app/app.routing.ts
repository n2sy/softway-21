import { RouterModule, Routes } from "@angular/router";
import { AddComponent } from "./add/add.component";
import { CvComponent } from "./cv/cv.component";
import { HomeComponent } from "./home/home.component";
import { InfosComponent } from "./infos/infos.component";
import { ManageServersComponent } from "./manage-servers/manage-servers.component";
import { MswordComponent } from "./msword/msword.component";
import { UpdateComponent } from "./update/update.component";
import { NotFoundComponent } from './not-found/not-found.component';


const myRoutes : Routes = [
    {path:'', component: HomeComponent},
    {path:'cv', component:CvComponent, children: [
       // {path:'', component: CvComponent},
        {path:'add', component: AddComponent},
        {path:':id', component: InfosComponent},
        {path:'edit/:id', component: UpdateComponent},
    ]},
    {path:'servers', component: ManageServersComponent},
    {path:'ms-word', component: MswordComponent},
    {path: 'not-found', component: NotFoundComponent},
    {path: '**', redirectTo: 'not-found'}
];

export const ROUTING_MERS = RouterModule.forRoot(myRoutes);