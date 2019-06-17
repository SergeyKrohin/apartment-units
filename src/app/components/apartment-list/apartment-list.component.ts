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
	
	constructor(private dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute, private location: Location){}

	public apartmentList = [];
	public filterPropName = 'address.city';
	public filterTerm;
	public citiesList = [];
	private subscriptions = [];
	
	public apartmentSelected(apartment) {
		this.router.navigate(['/detail', apartment.id]);
	}

	public citySelected(e) {
		if(e.target.value === 'all') {
			this.filterTerm = undefined;	
		} else {
			this.location.replaceState(`/list/${e.target.value.replace(/ /g, '_').toLowerCase()}`);
			this.filterTerm = e.target.value;	
		}
		
	}
	
	public getAvailableCities(apartmentList) {
		const availableCities = [];
		apartmentList.forEach(apartment => {
			if(availableCities.indexOf(apartment.address.city)  === -1 ) {
				availableCities.push(apartment.address.city);
			}
		});
		return availableCities;
	}
	
	ngOnInit() {
		const routeSub = this.activatedRoute.paramMap.subscribe((params) => {
			if(params.get("city")) {
				this.filterTerm = params.get("city").replace(/_/g, ' ');
			}
		});		
		const apartmentListSub = this.dataService.getApartmentList().subscribe((result) => {
			this.apartmentList = result;
			this.citiesList = this.getAvailableCities(this.apartmentList);
		});
		this.subscriptions.push(routeSub);
		this.subscriptions.push(apartmentListSub);
	}
	
	ngOnDestroy() {
		this.subscriptions.forEach((sub) => {
			sub.unsubscribe();
		});
	}
}
