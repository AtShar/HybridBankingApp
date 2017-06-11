
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { FundTransferComponent } from './fund-transfer.component';
import { MiniStatementComponent } from './mini-statement.component ';
import { LoginComponent } from './login.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        FundTransferComponent,
        MiniStatementComponent,
        LoginComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
