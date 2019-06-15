import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import 'rxjs/Rx';

@Injectable()
export class DataService {
	
	
	constructor(private httpService: HttpService) {}
	   
	private url: string = 'https://let-api-test.akelius.com/api/v2/marketing';
	
	
	public showDetailView(id) {}

	public getApartmentList() {
		return this.httpService.get(this.url + '/units?countryCode=DE').map((response) => {
			return response;
		});
	}
	
}