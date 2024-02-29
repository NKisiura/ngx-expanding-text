import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleRoute } from './shared/types/example-route.enum';

const routes: Routes = [
    {
        path: ExampleRoute.CONFIGURATIONS,
        loadChildren: () =>
            import('./examples/configurations/configurations.module').then(
                (m) => m.ConfigurationsModule
            ),
    },
    {
        path: ExampleRoute.TOGGLE_FROM_OUTSIDE,
        loadChildren: () =>
            import(
                './examples/toggle-from-outside/toggle-from-outside.module'
            ).then((m) => m.ToggleFromOutsideModule),
    },
    {
        path: ExampleRoute.CUSTOM_TOGGLE_BUTTON,
        loadChildren: () =>
            import(
                './examples/custom-toggle-button/custom-toggle-button.module'
            ).then((m) => m.CustomToggleButtonModule),
    },
    {
        path: ExampleRoute.STYLED_TEXT,
        loadChildren: () =>
            import('./examples/styled-text/styled-text.module').then(
                (m) => m.StyledTextModule
            ),
    },
    {
        path: '',
        redirectTo: ExampleRoute.CONFIGURATIONS,
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: ExampleRoute.CONFIGURATIONS,
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
