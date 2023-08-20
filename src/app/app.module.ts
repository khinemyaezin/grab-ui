import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './routes/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ThemeModule } from './theme/theme.module';
import { httpInterceptorProviders } from './core/interceptor';
import { NgxPermissionsModule } from 'ngx-permissions';
import { appInitializerProviders } from './core/initializers';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    ThemeModule,
    NgxPermissionsModule.forRoot(),
  ],
  providers: [
    httpInterceptorProviders,
    appInitializerProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
