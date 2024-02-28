import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'ngx-expanding-text',
    template: ` <p>ngx-expanding-text works!</p> `,
    styleUrls: ['ngx-expanding-text.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxExpandingTextComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
