import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const appRoutes: Routes = [

    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];

export const AppRouting = RouterModule.forRoot(appRoutes);
