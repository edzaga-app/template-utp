import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../../../shared/material/material.module';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoModule } from '../logo/logo.module';



@NgModule({
  declarations: [
    NavigationComponent,
    ToolbarComponent,
    MenuItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    LogoModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule { }
