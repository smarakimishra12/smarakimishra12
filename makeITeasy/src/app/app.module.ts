import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './module/header/header.component';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RegisterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
