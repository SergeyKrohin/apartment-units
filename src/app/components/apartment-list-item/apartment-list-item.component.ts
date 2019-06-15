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

	ngOnInit() {

	}
	
	ngOnDestroy() {}
}
