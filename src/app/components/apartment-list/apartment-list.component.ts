import { HttpService } from '../../services/http/http.service';
import { DataService } from '../../services/data/data.service';
import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';

@Component({
	selector: 'apartment-list',
	templateUrl: './apartment-list.component.html',
	styleUrls: ['./apartment-list.component.scss']
})

export class ApartmentListComponent implements OnInit {
	
	constructor(private dataService: DataService, private router: Router){}

	public apartmentList = [];
	public filterPropName = 'address.city';
	public filterTerm;
	public citiesList = [];
	public apartmentListSub;
	
	public apartmentSelected(apartment) {
		this.router.navigate(['/detail', apartment.id]);
	}

	public citySelected(e) {
		if(e.target.value === 'all') {
			this.filterTerm = undefined;	
		} else {
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
		this.apartmentListSub = this.dataService.getApartmentList().subscribe((result) => {
			this.apartmentList = result;
			this.citiesList = this.getAvailableCities(this.apartmentList);
		});
	}
	
	ngOnDestroy() {
		this.apartmentListSub.unsubscribe();
	}
}
