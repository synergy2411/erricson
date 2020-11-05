import { LoginGaurdService } from './service/login-gaurd.service';
import { SpecificationComponent } from './product/specification/specification.component';
import { OverviewComponent } from './product/overview/overview.component';
import { ProductComponent } from './product/product.component';
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
}, {
  path : 'login',                // http://localhost:4200/login
  component : LoginComponent
}, {
  path: 'register',              // http://localhost:4200/register
  component : RegisterComponent
}, {
  path : 'pipe',                 // http://localhost:4200/pipe
  component: PipeDemoComponent
}, {
  path: 'observable',                  // http://localhost:4200/observable
  component : ObservableDemoComponent
}, {
  path : 'lifecycle',                  // http://localhost:4200/lifecycle
  component : LifeCycleDemoComponent
}, {
  path : 'users',                      // http://localhost:4200/users
  component: UserComponent,
  canActivate: [LoginGaurdService]
}, {
  path : 'product/:id/:prod_name',                     // http://localhost:4200/product
  component : ProductComponent,
  children: [{
    path: 'overview',                   // http://localhost:4200/product/overview
    component : OverviewComponent
  }, {
    path: 'specification',                // http://localhost:4200/product/specification
    component : SpecificationComponent
  }]
},{
  path: 'lazy',
  loadChildren : './lazy/lazy.module#LazyModule'                   // 'path/to/module/filename#ModuleName'
}, {
  path : '**',                          // http://localhost:4200/nowhere //if url does not match above mentioned paths
  redirectTo : 'login',
  pathMatch : 'full'
}];
