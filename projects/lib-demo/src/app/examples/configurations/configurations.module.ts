import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationsComponent } from './configurations.component';
import { RouterModule, Routes } from '@angular/router';
import { ExampleViewerModule } from '../../shared/components/example-viewer/example-viewer.module';
import { NgxExpandingTextModule } from 'ngx-expanding-text';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: '',
        component: ConfigurationsComponent,
    },
];

@NgModule({
    declarations: [ConfigurationsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ExampleViewerModule,
        NgxExpandingTextModule,
        FormsModule,
    ],
})
export class ConfigurationsModule {}
