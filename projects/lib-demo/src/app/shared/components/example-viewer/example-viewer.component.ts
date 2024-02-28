import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-example-viewer',
    templateUrl: './example-viewer.component.html',
    styleUrls: ['./example-viewer.component.scss'],
})
export class ExampleViewerComponent {
    @Input() public title: string = '';
    @Input() public ghExampleLink: string = '';
}
