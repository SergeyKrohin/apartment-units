import { HttpService } from '../../services/http/http.service';
import { DataService } from '../../services/data/data.service';
import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
	selector: 'apartment-list',
	templateUrl: './apartment-list.component.html',
	styleUrls: ['./apartment-list.component.scss']
})

export class ApartmentListComponent implements OnInit {
	
	constructor(
		private dataService: DataService, 
		private router: Router, 
		private activatedRoute: ActivatedRoute, 
		private location: Location){}

	public apartmentList = [];
	public selectedCity;
	public selectedStreet;
	public citiesList = [];
	public streetList = [];
	private routeSub;
	
	public apartmentSelected(apartment) {
		this.router.navigate(['/detail', apartment.id]);
	}

	public citySelected(e) {
		if(e.target.value === 'all') {
			this.location.replaceState('/list')
			this.selectedCity = undefined;			
		} else {
			this.location.replaceState(`/list/${e.target.value.replace(/ /g, '_').toLowerCase()}`);
			this.selectedCity = e.target.value;	
			this.streetList = this.apartmentList.filter(apartment => (
				apartment.address.city === e.target.value
			)).map(apartment => apartment.address.streetName);
		}
		this.selectedStreet = undefined;	
	}
	
	public streetSelected(e) {
		if(e.target.value === 'all') {
			this.selectedStreet = undefined;	
		} else {
			this.selectedStreet = e.target.value;	
		}
	}
	
	public getAvailable(list, property) {
		return list.reduce((available, apartment) => {
			if (available.indexOf(apartment.address[property])  === -1) {
				available.push(apartment.address[property]);
			}
			return available;
		}, []); 
	}
	
	ngOnInit() {
		this.routeSub = this.activatedRoute.paramMap.subscribe((params) => {
			if(params.get("city")) {
				this.selectedCity = params.get("city").replace(/_/g, ' ');
			}
		});		
		this.dataService.getApartmentList().subscribe((result) => {
			this.apartmentList = result;
			this.citiesList = this.getAvailable(this.apartmentList, 'city');
			this.streetList = this.getAvailable(this.apartmentList, 'streetName');
		});
	}
	
	ngOnDestroy() {
		this.routeSub.unsubscribe();
	}
}
