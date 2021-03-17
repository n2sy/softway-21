import { RouterModule, Routes } from "@angular/router";
import { AccueilComponent } from "./accueil/accueil.component";
import { DetailServerComponent } from "./detail-server/detail-server.component";
import { EditServerComponent } from "./edit-server/edit-server.component";
import { ListserversComponent } from "./listservers/listservers.component";


const myRoutes : Routes = [
    {path : '', component: ListserversComponent, children: [
        {path: ':id', component: DetailServerComponent},
        {path: 'edit/:id', component: EditServerComponent},
    ]}
];

export const SUB_ROUTING = RouterModule.forChild(myRoutes);