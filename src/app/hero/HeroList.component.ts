import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {Hero} from './Hero';
import {HeroDetailComponent} from './HeroDetail.component';
import {HeroService} from './Hero.service';

@Component({
	directives: [CORE_DIRECTIVES, HeroDetailComponent],
	selector: 'hero-list',
	styleUrls: ['app/app.css'],
	templateUrl: 'app/hero/views/heroList.component.html'
})
export class HeroListComponent {
	heroes: Hero[];
	selectedHero: Hero;

	constructor(service: HeroService) {
		this.heroes = service.getHeroes();
	}

	getSelectedClass(hero: Hero): any {
		return {
			'selected': hero === this.selectedHero
		};
	}

	selectHero(hero: Hero): void {
		this.selectedHero = hero;
	}
}
