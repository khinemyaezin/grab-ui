import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { MaterialModule } from '../material.module';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { ErrorCodeComponent } from './components/error-code/error-code.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { TranslateModule } from '@ngx-translate/core';


const MODULES: any[] = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  FormsModule,
  DragDropModule,
  MaterialModule,
  NgxPermissionsModule,
  TranslateModule
];
const COMPONENTS: any[] = [BreadcrumbComponent, PageHeaderComponent, ErrorCodeComponent];
const COMPONENTS_DYNAMIC: any[] = [];
const DIRECTIVES: any[] = [];
const PIPES: any[] = [];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES, ...COMPONENTS, ...DIRECTIVES, ...PIPES],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, ...DIRECTIVES, ...PIPES],
})
export class SharedModule {}
