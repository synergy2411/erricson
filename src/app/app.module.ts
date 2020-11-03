import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { UserImgComponent } from './user/user-img/user-img.component';

@NgModule({
  declarations: [   // Component, Pipe, Directive
    AppComponent,
    UserComponent,
    UserInfoComponent,
    UserImgComponent
  ],
  imports: [        // Modules - Built-in / Custom Module
    BrowserModule
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
