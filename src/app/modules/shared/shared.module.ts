import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
<<<<<<< HEAD
import { materialModule } from './material.module';
import { RouterModule } from '@angular/router';
//import { FlexLayoutModule} from '@angular/flex-layout';
=======
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
>>>>>>> 7acd418a01973cacc6a3338fd0f9352405759122



@NgModule({
  declarations: [
    SidenavComponent
  ],
  exports: [
    SidenavComponent
  ],
<<<<<<< HEAD
  
  imports: [
    CommonModule, 
    RouterModule,
    materialModule,
    //FlexLayoutModule
  
=======
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
>>>>>>> 7acd418a01973cacc6a3338fd0f9352405759122
  ]
})
export class SharedModule { }
