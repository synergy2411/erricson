import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { UserImgComponent } from './user/user-img/user-img.component';
import { LifeCycleDemoComponent } from './life-cycle-demo/life-cycle-demo.component';
import { HighlightDirective } from './directive/highlight.directive';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { NationalCodePipe } from './pipe/national-code.pipe';
import { FilterPipe } from './pipe/filter.pipe';

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
    FilterPipe
  ],
  imports: [        // Modules - Built-in / Custom Module
    BrowserModule,
    FormsModule
  ],
  providers: [],      // Services
  bootstrap: [AppComponent]
})
export class AppModule { }


// Angular Building blocks
// - Module
// - Components
// - Pipe
// - Services
// - Directives
