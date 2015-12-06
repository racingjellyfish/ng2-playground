import {Pipe} from 'angular2/angular2';

@Pipe({
	name: 'initCaps'
})
export class InitCapsPipe {
	transform(value: string): string {
		return value.toLowerCase().replace(/(?:^|\s)[a-z]/g, m => m.toUpperCase());
	}
}
