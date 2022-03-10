import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeformComponent } from './incomeform/incomeform.component';
import { IncomeheaderComponent } from './incomeheader/incomeheader.component';
import { IncomeComponent } from './income/income.component';
import { IncomechecklistComponent } from './incomechecklist/incomechecklist.component';
import { IncomehistoryComponent } from './incomehistory/incomehistory.component';
import { LeftsidemenuComponent } from './leftsidemenu/leftsidemenu.component';

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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
