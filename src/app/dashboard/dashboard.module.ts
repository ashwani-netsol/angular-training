import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from './elements/header/header.component';
import { SidebarComponent } from './elements/sidebar/sidebar.component';
import { BreadcrumbBarComponent } from './elements/breadcrumb-bar/breadcrumb-bar.component';
import { UserComponent } from './components/user/user.component';
import { GreetingPipe } from './elements/pipes/greeting.pipe';
import { LandingComponent } from './components/landing/landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './components/child/child.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent, HeaderComponent, SidebarComponent, BreadcrumbBarComponent, UserComponent, GreetingPipe, LandingComponent, ChildComponent],
  entryComponents: [
    ChildComponent
  ]
})
export class DashboardModule {
  constructor (private injector: Injector) {

  }

  ngDoBootstrap() {
    const el = createCustomElement(ChildComponent, {injector: this.injector});
    customElements.define('landing-child', el);
  }
}
