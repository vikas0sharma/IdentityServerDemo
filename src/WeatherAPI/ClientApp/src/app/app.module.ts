import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule, OidcConfigService } from 'angular-auth-oidc-client';
import { configureAuth } from './app.identity.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
      OidcConfigService,
      {
          provide : APP_INITIALIZER,
          useFactory : configureAuth,
          deps: [OidcConfigService],
          multi: true,
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
