import { HttpService } from '../../services/http/http.service';
import { DataService } from '../../services/data/data.service';
import { Component, OnInit, Input } from '@angular/core'; 

@Component({
	selector: 'apartment-list-item',
	templateUrl: './apartment-list-item.component.html',
	styleUrls: ['./apartment-list-item.component.scss']
})

export class ApartmentListItemComponent implements OnInit {
	
	constructor(){}

	@Input() apartment;
	
	public get address() {
		const address = this.apartment.address;
		return `${address.streetName} 
				${address.houseNumber} 
				${address.postalCode} 
				${address.city}`;
	}
	
	public get apartmentSize() {
		return this.apartment.details.size ? 
			`${this.apartment.details.size} ${this.apartment.localization.areaUnit}` : '' ;
	}
	
	public get price() {
		return this.apartment.details.rent.totalRent ? 
			`${this.apartment.details.rent.totalRent} ${this.apartment.localization.currency}` : '';
	}
	
	public sendMail(e) {
		e.stopPropagation();
		// send mail code goes here
	}

	ngOnInit() {

	}
	
	ngOnDestroy() {}
}
