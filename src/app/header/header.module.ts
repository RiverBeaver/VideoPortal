import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from './settings/settings.component';



@NgModule({
  declarations: [
    HeaderComponent, 
    SettingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
