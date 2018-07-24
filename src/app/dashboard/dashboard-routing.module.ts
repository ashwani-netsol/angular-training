import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../core/auth-guard.service';

const dashboardRoutes: Routes = [
    { path: '', component: DashboardComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule { }

export const routingComponents = [
    DashboardComponent
];
