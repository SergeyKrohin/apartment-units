import { HttpService } from '../../services/http/http.service';
import { DataService } from '../../services/data/data.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core'; 

@Component({
	selector: 'item-favourite',
	templateUrl: './item-favourite.component.html',
	styleUrls: ['./item-favourite.component.scss']
})

export class ItemFavouriteComponent {
	
	@Output() onStatusChange = new EventEmitter();

	public status = 'removed';
	public titleText = {
		added: 'add to favourites',
		removed: 'remove from favourites'
	};
	
	public toggle() {
		this.onStatusChange.emit(this.status = this.status === 'removed' ? 'added' : 'removed');
	}
}
