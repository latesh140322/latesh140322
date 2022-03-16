import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeformComponent } from './income-component/incomeform/incomeform.component';


const routes: Routes = [

    { path: '', component: DashboardComponent },
    { path: 'Dashboard', component: DashboardComponent },
    {path:'income/create', component:IncomeformComponent},
    // { path:'Forms', component:IncomeformComponent},
    
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
