import { LoggerInterceptorService } from './service/logger-interceptor.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EmployeeModule } from './employee/employee.module';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { UserImgComponent } from './user/user-img/user-img.component';
import { LifeCycleDemoComponent } from './life-cycle-demo/life-cycle-demo.component';
import { HighlightDirective } from './directive/highlight.directive';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { NationalCodePipe } from './pipe/national-code.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { DataService } from './service/data.service';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { APP_ROUTES } from './app.routes';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { OverviewComponent } from './product/overview/overview.component';
import { SpecificationComponent } from './product/specification/specification.component';
import { AuthInterceptorService } from './service/auth-interceptor.service';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [   // Component, Pipe, Directive
    AppComponent,
    UserComponent,
    UserInfoComponent,
    UserImgComponent,
    LifeCycleDemoComponent,
    HighlightDirective,
    PipeDemoComponent,
    NationalCodePipe,
    FilterPipe,
    RegisterComponent,
    LoginComponent,
    ObservableDemoComponent,
    HeaderComponent,
    ProductComponent,
    OverviewComponent,
    SpecificationComponent
  ],
  imports: [        // Modules - Built-in / Custom Module
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EmployeeModule,             // Eagerly loaded
    RouterModule.forRoot(APP_ROUTES),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [DataService, {
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptorService,
    multi : true
  }, {
    provide : HTTP_INTERCEPTORS,
    useClass : LoggerInterceptorService,
    multi : true
  }],      // Services
  bootstrap: [AppComponent]
})
export class AppModule { }


// Angular Building blocks
// - Module
// - Components
// - Pipe
// - Services
// - Directives
