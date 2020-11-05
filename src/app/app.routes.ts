import { UserComponent } from './user/user.component';
import { LifeCycleDemoComponent } from './life-cycle-demo/life-cycle-demo.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';

export const APP_ROUTES: Routes = [{
  path : '',                  // http://localhost:4200
  redirectTo : 'login',
  pathMatch : 'full'
},{
  path : 'login',                // http://localhost:4200/login
  component : LoginComponent
},{
  path: 'register',              // http://localhost:4200/register
  component : RegisterComponent
},{
  path : 'pipe',                 // http://localhost:4200/pipe
  component: PipeDemoComponent
}, {
  path: 'observable',                  // http://localhost:4200/observable
  component : ObservableDemoComponent
},{
  path : 'lifecycle',                  // http://localhost:4200/lifecycle
  component : LifeCycleDemoComponent
},{
  path : 'users',                      // http://localhost:4200/users
  component: UserComponent
},{
  path : '**',                          // http://localhost:4200/nowhere //if url does not match above mentioned paths
  redirectTo : 'login',
  pathMatch : 'full'
}]
