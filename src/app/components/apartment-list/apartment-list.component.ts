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
	public term = '';
	public propName = 'name';
	private subscriptions = [];
	private listLimit = 100;


	ngOnInit() {
	}
	
	ngOnDestroy() {}
}
