import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleRoute } from './shared/types/example-route.enum';

const routes: Routes = [
    {
        path: ExampleRoute.CUSTOM_TOGGLE_BUTTON,
        loadChildren: () =>
            import(
                './examples/custom-toggle-button/custom-toggle-button.module'
            ).then((m) => m.CustomToggleButtonModule),
    },
    {
        path: ExampleRoute.TOGGLE_FROM_OUTSIDE,
        loadChildren: () =>
            import(
                './examples/toggle-from-outside/toggle-from-outside.module'
            ).then((m) => m.ToggleFromOutsideModule),
    },
    {
        path: '',
        redirectTo: ExampleRoute.CUSTOM_TOGGLE_BUTTON,
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: ExampleRoute.CUSTOM_TOGGLE_BUTTON,
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
