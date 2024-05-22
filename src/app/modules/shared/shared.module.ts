import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { materialModule } from './material.module';
import { RouterModule } from '@angular/router';
//import { FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  declarations: [
    SidenavComponent
  ],
  exports: [
    SidenavComponent
  ],
  
  imports: [
    CommonModule, 
    RouterModule,
    materialModule,
    //FlexLayoutModule
  
  ]
})
export class SharedModule { }
