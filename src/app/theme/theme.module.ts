import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { SellerCentralLayoutComponent } from './seller-central-layout/seller-central-layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrandingComponent } from './widgets/branding.component';
import { GithubButtonComponent } from './widgets/github.component';
import { UserComponent } from './widgets/user.component';
import { SidebarNoticeComponent } from './sidebar-notice/sidebar-notice.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { TopmenuPanelComponent } from './topmenu/topmenu-panel.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { NavAccordionDirective } from './sidemenu/nav-accordion.directive';
import { NavAccordionItemDirective } from './sidemenu/nav-accordion-item.directive';
import { NavAccordionToggleDirective } from './sidemenu/nav-accordion-toggle.directive';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    SellerCentralLayoutComponent,
    HeaderComponent,
    SidebarComponent,
    BrandingComponent,
    GithubButtonComponent,
    UserComponent,
    SidebarNoticeComponent,
    TopmenuComponent,
    TopmenuPanelComponent,
    SidemenuComponent,
    NavAccordionDirective,
    NavAccordionItemDirective,
    NavAccordionToggleDirective,
  ],
  imports: [SharedModule],
})
export class ThemeModule {}
