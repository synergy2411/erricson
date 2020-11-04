import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    ObservableDemoComponent
  ],
  imports: [        // Modules - Built-in / Custom Module
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService],      // Services
  bootstrap: [AppComponent]
})
export class AppModule { }


// Angular Building blocks
// - Module
// - Components
// - Pipe
// - Services
// - Directives
