import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
<<<<<<< HEAD
import { SharedModule} from '../shared/shared.module';
=======
import { DashboardComponent } from './pages/dashboard.component';
import { SharedModule } from '../shared/shared.module';
>>>>>>> 7acd418a01973cacc6a3338fd0f9352405759122



@NgModule({
  declarations: [
<<<<<<< HEAD
    DashboardComponent, 
=======
    DashboardComponent,
>>>>>>> 7acd418a01973cacc6a3338fd0f9352405759122
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DashboardModule { }
