import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { DataService } from '../data/data.service';

@Injectable()
export class DetailViewResolver implements Resolve<any> {
	
	constructor(private dataService: DataService) {}
	                
	resolve(route) {
		return this.dataService.showDetailView(route.params['id']);
	}
}
