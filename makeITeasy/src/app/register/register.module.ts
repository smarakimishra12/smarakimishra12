import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class RegisterModule { }
