import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleFromOutsideComponent } from './toggle-from-outside.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: ToggleFromOutsideComponent,
    },
];

@NgModule({
    declarations: [ToggleFromOutsideComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ToggleFromOutsideModule {}
