import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuardService as AuthGuard } from '../core/auth-guard.service';
import { UserComponent } from './components/user/user.component';
import { LandingComponent } from './components/landing/landing.component';

const dashboardRoutes: Routes = [
    { path: '',
      component: DashboardComponent,
      children: [
          { path: '', component: LandingComponent},
          { path: 'users', component: UserComponent}
      ],
      canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule { }

export const routingComponents = [
    DashboardComponent
];
