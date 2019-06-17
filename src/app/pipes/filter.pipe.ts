import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
	name: 'filter'
})
export class FilterPipe implements PipeTransform {
	
    transform(items, term, propName): any {
        
		if(typeof term === 'undefined' || typeof propName === 'undefined') {
			return items;
		}
			
		return _.filter(items, [propName, term]);
	
    }
	
}