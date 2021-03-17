import { RouterModule, Routes } from "@angular/router";
import { AddComponent } from "./add/add.component";
import { CvComponent } from "./cv/cv.component";
import { HomeComponent } from "./home/home.component";
import { InfosComponent } from "./infos/infos.component";
import { ManageServersComponent } from "./manage-servers/manage-servers.component";
import { MswordComponent } from "./msword/msword.component";
import { UpdateComponent } from "./update/update.component";
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from "./login/login.component";


const myRoutes : Routes = [
    {path:'', component: HomeComponent},
    {path:'cv', children: [
        {path:'', component: CvComponent},
        {path:'add', component: AddComponent},
        {path:':id', component: InfosComponent},
        {path:'edit/:id', component: UpdateComponent},
    ]},
    {path:'servers', component: ManageServersComponent},
    {path:'ms-word', component: MswordComponent},
    {path:'login', component: LoginComponent},
    // {path:'serveur', loadChildren: '../app/sub-servers/sub-servers.module#SubServersModule'},
    {path: 'not-found', component: NotFoundComponent},
    {path: '**', redirectTo: 'not-found'}
];

export const ROUTING_MERS = RouterModule.forRoot(myRoutes);