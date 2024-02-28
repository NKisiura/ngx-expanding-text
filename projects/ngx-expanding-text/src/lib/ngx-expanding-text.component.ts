import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
    TemplateRef,
} from '@angular/core';

@Component({
    selector: 'ngx-expanding-text',
    template: `
        <span>{{ textForView }}</span>

        <ng-container *ngIf="isTextLongerThanLimit">
            <ng-container
                *ngTemplateOutlet="
                    isExpanded
                        ? lessButtonTemplate || defaultButtonTemplate
                        : moreButtonTemplate || defaultButtonTemplate;
                    context: {
                        toggleFn: toggleTextExpansion.bind(this),
                        isExpanded: isExpanded
                    }
                "
            ></ng-container>
        </ng-container>

        <ng-template #defaultButtonTemplate>
            <button class="toggle-button" (click)="toggleTextExpansion()">
                {{ isExpanded ? lessButtonText : moreButtonText }}
            </button>
        </ng-template>
    `,
    styleUrls: ['ngx-expanding-text.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxExpandingTextComponent implements OnChanges, OnInit {
    @Input('text') public rawText: string = '';

    @Input() public charCountLimit: number = 100;
    @Input() public showEllipsis: boolean = true;
    @Input() public initiallyExpanded: boolean = false;

    @Input() public moreButtonText: string = 'Show More';
    @Input() public lessButtonText: string = 'Show Less';

    @Input() public moreButtonTemplate: TemplateRef<any> | null = null;
    @Input() public lessButtonTemplate: TemplateRef<any> | null = null;

    @Output() public toggle = new EventEmitter<{ isExpanded: boolean }>();

    private cachedTextForView: string = '';
    public isExpanded: boolean = false;

    ngOnChanges(changes: SimpleChanges): void {
        if (
            changes['rawText'] ||
            changes['charCountLimit'] ||
            changes['showEllipsis']
        ) {
            this.cachedTextForView = this.getTextForView();
        }
    }

    ngOnInit(): void {
        this.isExpanded = this.initiallyExpanded;
    }

    public get textForView(): string {
        return this.cachedTextForView;
    }

    public get isTextLongerThanLimit(): boolean {
        return this.rawText.length > this.charCountLimit;
    }

    public toggleTextExpansion(): void {
        this.isExpanded = !this.isExpanded;
        this.cachedTextForView = this.getTextForView();
        this.toggle.emit({ isExpanded: this.isExpanded });
    }

    private getTextForView(): string {
        if (!this.isExpanded && this.isTextLongerThanLimit) {
            return (
                this.rawText.slice(0, this.charCountLimit) +
                (this.showEllipsis ? '...' : '')
            );
        } else {
            return this.rawText;
        }
    }
}
