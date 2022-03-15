import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeformComponent } from './income-component/incomeform/incomeform.component';
import { IncomeheaderComponent } from './income-component/incomeheader/incomeheader.component';
import { IncomeComponent } from './income-component/income/income.component';
import { IncomechecklistComponent } from './income-component/incomechecklist/incomechecklist.component';
import { IncomehistoryComponent } from './income-component/incomehistory/incomehistory.component';
import { LeftsidemenuComponent } from './leftsidemenu/leftsidemenu.component';
import { BrowserModule } from '@angular/platform-browser';

import{HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    IncomeformComponent,
    IncomeheaderComponent,
    IncomeComponent,
    IncomechecklistComponent,
    IncomehistoryComponent,
    LeftsidemenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
