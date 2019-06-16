import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApartmentListComponent } from '../../components/apartment-list/apartment-list.component';
import { ApartmentDetailsComponent } from '../../components/apartment-details/apartment-details.component';
import { ApartmentDetailsResolver } from '../../services/apartment-details-resolver/apartment-details.resolver';

const routes: Routes = [
  {
    path: 'list',
	component: ApartmentListComponent
  },
  {
    path: 'detail/:id',
	component: ApartmentDetailsComponent,
	resolve: {
		apartmentDetails: ApartmentDetailsResolver
	}
  },
  {
    path: '**',
	redirectTo: '/list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }