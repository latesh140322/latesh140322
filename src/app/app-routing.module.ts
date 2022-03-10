import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeformComponent } from './incomeform/incomeform.component';


const routes: Routes = [

    { path: '', component: DashboardComponent },
    { path: 'Dashboard', component: DashboardComponent },
    {path:'income/create', component:IncomeformComponent},
    
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
