import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';


const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule, 
  MatSidenavModule,
  MatListModule,
  MatCheckboxModule
];

@NgModule({
  declarations: [],
  imports: [
    materialModules
  ],
  exports: [
    materialModules
  ]
})
export class MaterialModule { }
