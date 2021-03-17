import { RouterModule, Routes } from "@angular/router";
import { CvComponent } from "./cv/cv.component";
import { HomeComponent } from "./home/home.component";
import { ManageServersComponent } from "./manage-servers/manage-servers.component";
import { MswordComponent } from "./msword/msword.component";


const myRoutes : Routes = [
    {path:'', component: HomeComponent},
    {path:'cv', component: CvComponent},
    {path:'servers', component: ManageServersComponent},
    {path:'ms-word', component: MswordComponent}
];

export const ROUTING_MERS = RouterModule.forRoot(myRoutes);