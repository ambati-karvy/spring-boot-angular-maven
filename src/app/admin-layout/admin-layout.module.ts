import { NgModule, NO_ERRORS_SCHEMA , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CommonModule } from '@angular/common';
import { UserComponent } from './views/user/user.component';
import { AspMasterComponent } from './views/asp-master/asp-master.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { SharedModule } from './shared/shared.module';
import { AgmCoreModule } from '@agm/core';

import { CalendarModule,  } from 'angular-calendar';

@NgModule({
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    SharedModule,
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: ''
    }),
    CalendarModule.forRoot(),
    MDBBootstrapModule.forRoot(),
  ],
  declarations: [UserComponent, AspMasterComponent,AdminLayoutComponent, FooterComponent, HeaderComponent, SidenavComponent],
  
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminLayoutModule { }
