import { NgModule } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { DataService } from '../../services/data/data.service';
import { ApartmentDetailsResolver } from '../../services/apartment-details-resolver/apartment-details.resolver';
import { LoaderService, LoaderInterceptor } from '../../services/loader/loader.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	imports: [
		HttpClientModule
	],
	providers: [
		HttpService, 
		DataService, 
		ApartmentDetailsResolver, 
		LoaderService,
		{ provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
	]
})

export class CoreModule {}