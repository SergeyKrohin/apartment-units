import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { ApartmentListComponent } from '../../components/apartment-list/apartment-list.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
	declarations: [DashboardComponent, ApartmentListComponent],
	imports: [SharedModule ,BrowserModule, FormsModule, DashboardRoutingModule],
	providers: [],
	exports: [DashboardComponent]
})

export class DashboardModule {}