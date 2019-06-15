import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { ApartmentListComponent } from '../../components/apartment-list/apartment-list.component';
import { ApartmentListItemComponent } from '../../components/apartment-list-item/apartment-list-item.component';
import { ItemFavouriteComponent } from '../../components/item-favourite/item-favourite.component';
import { ApartmentDetailsComponent } from '../../components/apartment-details/apartment-details.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
	declarations: [DashboardComponent, ApartmentListComponent, ApartmentListItemComponent, ItemFavouriteComponent, ApartmentDetailsComponent],
	imports: [SharedModule ,BrowserModule, FormsModule, DashboardRoutingModule],
	providers: [],
	exports: [DashboardComponent]
})

export class DashboardModule {}