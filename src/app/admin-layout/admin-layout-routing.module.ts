import {Routes, RouterModule} from "@angular/router";
import { AdminLayoutComponent } from "./admin-layout.component";
import { UserComponent } from "./views/user/user.component";
import { AspMasterComponent } from "./views/asp-master/asp-master.component";
import { NgModule } from "@angular/core";


const routes : Routes = [
    {path:'', component:AdminLayoutComponent,children:[
        // {path:'',redirectTo:'user',pathMatch: 'full'},
        {path:'user',component:UserComponent},
        {path:'asp',component:AspMasterComponent}
    ]}
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminLayoutRoutingModule {

}