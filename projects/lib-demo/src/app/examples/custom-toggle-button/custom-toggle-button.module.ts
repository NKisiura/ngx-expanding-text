import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomToggleButtonComponent } from './custom-toggle-button.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxExpandingTextModule } from 'ngx-expanding-text';
import { ExampleViewerModule } from '../../shared/components/example-viewer/example-viewer.module';

const routes: Routes = [
    {
        path: '',
        component: CustomToggleButtonComponent,
    },
];

@NgModule({
    declarations: [CustomToggleButtonComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NgxExpandingTextModule,
        ExampleViewerModule,
    ],
})
export class CustomToggleButtonModule {}
