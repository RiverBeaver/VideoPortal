import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import HeaderComponent from './header.component';
import SettingsComponent from './settings/settings.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [HeaderComponent],
})
export default class HeaderModule { }
