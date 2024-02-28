import { Component } from '@angular/core';
import { ExampleRoute } from './shared/types/example-route.enum';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public githubRepositoryLink = '';

    public exampleRoutes = Object.values(ExampleRoute);
}
