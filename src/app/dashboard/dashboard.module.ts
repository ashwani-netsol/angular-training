import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from './elements/header/header.component';
import { SidebarComponent } from './elements/sidebar/sidebar.component';
import { BreadcrumbBarComponent } from './elements/breadcrumb-bar/breadcrumb-bar.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent, HeaderComponent, SidebarComponent, BreadcrumbBarComponent]
})
export class DashboardModule { }
