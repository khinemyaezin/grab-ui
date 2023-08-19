import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { MaterialModule } from '../material.module';


const MODULES: any[] = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  FormsModule,
  DragDropModule,
  MaterialModule,
];
const COMPONENTS: any[] = [];
const COMPONENTS_DYNAMIC: any[] = [];
const DIRECTIVES: any[] = [];
const PIPES: any[] = [];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES, ...COMPONENTS, ...DIRECTIVES, ...PIPES],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, ...DIRECTIVES, ...PIPES],
})
export class SharedModule {}
