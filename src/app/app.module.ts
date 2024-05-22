import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwalUtils } from './utils/SwalUtils';
import { provideNgxMask } from 'ngx-mask';
import { MaterialModule } from './core/material/material.module';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormBaseComponent } from './shared/form-base/form-base.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, LoginComponent, FormBaseComponent],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, HttpClientModule],
  providers: [SwalUtils, provideNgxMask()],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
