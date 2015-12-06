import {bootstrap, Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {Hero} from './hero/Hero';
import {HeroListComponent} from './hero/HeroList.component';
import {HeroService} from './hero/Hero.service';

@Component({
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, HeroListComponent],
	selector: 'my-app',
	styleUrls: ['app/app.css'],
	templateUrl: 'app/views/app.html'
})
class AppComponent {
	public title: string = 'Tour of Heroes';
}

bootstrap(AppComponent, [
	HeroService
]);
