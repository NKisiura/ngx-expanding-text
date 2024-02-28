import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleFromOutsideComponent } from './toggle-from-outside.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxExpandingTextModule } from 'ngx-expanding-text';
import { ExampleViewerModule } from '../../shared/components/example-viewer/example-viewer.module';

const routes: Routes = [
    {
        path: '',
        component: ToggleFromOutsideComponent,
    },
];

@NgModule({
    declarations: [ToggleFromOutsideComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NgxExpandingTextModule,
        ExampleViewerModule,
    ],
})
export class ToggleFromOutsideModule {}
