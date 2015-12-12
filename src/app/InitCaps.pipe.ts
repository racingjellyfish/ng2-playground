import {Pipe} from "angular2/angular2";

@Pipe({
	name: "initCaps"
})
export class InitCapsPipe {
	public transform(value: string): string {
		return value.toLowerCase().replace(/(?:^|\s)[a-z]/g, (m: string) => m.toUpperCase());
	}
}
