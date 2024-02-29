import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyledTextComponent } from './styled-text.component';
import { ExampleViewerModule } from '../../shared/components/example-viewer/example-viewer.module';
import { NgxExpandingTextModule } from 'ngx-expanding-text';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: StyledTextComponent,
    },
];

@NgModule({
    declarations: [StyledTextComponent],
    imports: [
        CommonModule,
        ExampleViewerModule,
        RouterModule.forChild(routes),
        NgxExpandingTextModule,
    ],
})
export class StyledTextModule {}
