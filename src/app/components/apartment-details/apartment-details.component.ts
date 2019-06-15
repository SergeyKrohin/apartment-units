import { HttpService } from '../../services/http/http.service';
import { DataService } from '../../services/data/data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'apartment-details',
	templateUrl: './apartment-details.component.html',
	styleUrls: ['./apartment-details.component.scss']
})

export class ApartmentDetailsComponent implements OnInit, OnDestroy {
	
	constructor(private dataService: DataService, private route: ActivatedRoute){}

	private subscriptions = [];
	
	ngOnInit() {
		const routeSub = this.route.data.subscribe((data) => {
			//show details
		});
		this.subscriptions.push(routeSub);
	}
	
	ngOnDestroy() {
		this.subscriptions.forEach((sub) => {
			sub.unsubscribe();
		});
	}
}
