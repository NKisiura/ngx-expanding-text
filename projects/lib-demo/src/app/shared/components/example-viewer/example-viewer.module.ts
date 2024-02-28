import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleViewerComponent } from './example-viewer.component';

@NgModule({
    declarations: [ExampleViewerComponent],
    imports: [CommonModule],
    exports: [ExampleViewerComponent],
})
export class ExampleViewerModule {}
