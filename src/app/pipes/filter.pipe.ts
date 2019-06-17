import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
	name: 'filter'
})
export class FilterPipe implements PipeTransform {
	
	private getNestedItem(item, propName) {
		const props = propName.split('.');
		let currentItem = {...item};
		props.forEach(prop => {
			if(currentItem[prop]) {
				currentItem = currentItem[prop];	
			}
		});
		return currentItem;
	}
	
    transform(items, term, propName): any {
		if(!term || !propName) {
			return items;
		}	
		term = term.toLowerCase();
		return items.filter(item => {
			const nestedItem = this.getNestedItem(item, propName);
			if(typeof nestedItem === 'string') {
				return nestedItem.toLowerCase() === term;
			}
		});
    }
	
}