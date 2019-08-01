import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";


const routes: Routes = [
    {path:'admin',loadChildren:'./admin-layout/admin-layout.module#AdminLayoutModule'}
];


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}