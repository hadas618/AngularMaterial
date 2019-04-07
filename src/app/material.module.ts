import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
MatButtonModule,
MatCardModule,
MatCheckboxModule,
MatDialogModule,
MatIconModule,
MatInputModule,
MatListModule,
MatMenuModule,
MatSelectModule,
MatSidenavModule,
MatSlideToggleModule,
MatTabsModule,
MatToolbarModule
} from '@angular/material';

@NgModule ({
  exports:[
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatToolbarModule,
  FlexLayoutModule,// from '@angular/flex-layout'
  BrowserAnimationsModule
]})
export class MaterialModule{}