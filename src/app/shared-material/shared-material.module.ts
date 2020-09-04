import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalHeaderComponent } from './portal-header/portal-header.component';
import { PortalFooterComponent } from './portal-footer/portal-footer.component';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [PortalHeaderComponent, PortalFooterComponent, ErrorHandlerComponent],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports:[PortalHeaderComponent, PortalFooterComponent, ErrorHandlerComponent, MatToolbarModule]
})
export class SharedMaterialModule { }
