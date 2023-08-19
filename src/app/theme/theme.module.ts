import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';

@NgModule({
  declarations: [
    AuthLayoutComponent
  ],
  imports: [SharedModule],
})
export class ThemeModule {}
