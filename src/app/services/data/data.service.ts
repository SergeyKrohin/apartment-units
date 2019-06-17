import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
	
	
	constructor(private httpService: HttpService) {}
	   
	private url: string = 'https://let-api-test.akelius.com/api/v2/marketing';
	private apartments = [];

	// get apartments with caching
	public getApartmentList() {
		return Observable.create((observer:any) => {
			if(this.apartments.length) {
				observer.next(this.apartments);
			} else {
				this.httpService.get(this.url + '/units?countryCode=DE').subscribe((apartments) => {
					this.apartments = apartments.data;
					observer.next(this.apartments);
				});
			}
		}).first();
	}
	
	public getApartment(id) {
		return this.getApartmentList().map(list => {
			return list.find(item => item.id === id);
		});
	}
	
}