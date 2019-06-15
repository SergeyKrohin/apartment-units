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
	//public term = '';
	//public propName = 'name';
	public apartmentListSub;
	
	public apartmentSelected(apartment) {
		this.router.navigate(['/detail', apartment.id]);
	}

	ngOnInit() {
		this.apartmentListSub = this.dataService.getApartmentList().subscribe((result) => {
			this.apartmentList = result.data;
		});
	}
	
	ngOnDestroy() {
		this.apartmentListSub.unsubscribe();
	}
}
