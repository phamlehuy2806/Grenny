import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import {
  NbLayoutModule,
  NbLayoutHeaderComponent,
  NbActionsModule,
  NbSidebarModule
} from '@nebular/theme';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbLayoutHeaderComponent,
    NbActionsModule,
    NbSidebarModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,

  ]
})
export class ComponentsModule { }
