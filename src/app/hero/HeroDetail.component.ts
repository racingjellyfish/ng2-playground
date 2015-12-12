import {ChangeDetectionStrategy, Component, Input, FORM_DIRECTIVES} from "angular2/angular2";
import {Hero} from "./Hero";
import {InitCapsPipe} from "../InitCaps.pipe";

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	directives: [FORM_DIRECTIVES],
	pipes: [InitCapsPipe],
	selector: "hero-detail",
	styleUrls: ["app/app.css"],
	templateUrl: "app/hero/views/heroDetail.component.html"
})
export class HeroDetailComponent {
	@Input() public hero: Hero;
}
