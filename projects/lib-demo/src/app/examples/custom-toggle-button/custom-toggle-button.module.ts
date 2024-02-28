import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomToggleButtonComponent } from './custom-toggle-button.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: CustomToggleButtonComponent,
    },
];

@NgModule({
    declarations: [CustomToggleButtonComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CustomToggleButtonModule {}
