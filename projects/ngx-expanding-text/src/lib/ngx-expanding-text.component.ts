import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
    TemplateRef,
} from '@angular/core';
import { TextToggleEvent } from './types';

/**
 * `NgxExpandingTextComponent` is a component that wraps text and allows it to be expanded or collapsed. It is useful for displaying long text in a limited space.
 *
 * @example
 * <ngx-expanding-text
 *    [text]="yourText"
 *    [charCountLimit]="100"
 *    [showEllipsis]="true"
 *    [initiallyExpanded]="false"
 *    [moreButtonText]="'Show More'"
 *    [lessButtonText]="'Show Less'"
 *    (toggle)="yourToggleFunction($event)"
 * ></ngx-expanding-text>
 *
 * @Input {string} text - The raw text to be displayed in the component.
 * @Input {number} charCountLimit - The character count limit for the collapsed text view.
 * @Input {boolean} showEllipsis - Whether to show ellipsis when the text is collapsed.
 * @Input {boolean} initiallyExpanded - Whether the text should be initially expanded.
 * @Input {string} moreButtonText - The text for the 'Show More' button.
 * @Input {string} lessButtonText - The text for the 'Show Less' button.
 * @Input {TemplateRef<any>} moreButtonTemplate - A custom template for the 'Show More' button.
 * @Input {TemplateRef<any>} lessButtonTemplate - A custom template for the 'Show Less' button.
 *
 * @Output {TextToggleEvent} toggle - An event that is emitted when the text is expanded or collapsed.
 */
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

    @Output() public toggle = new EventEmitter<TextToggleEvent>();

    private cachedTextForView: string = '';
    public isExpanded: boolean = false;

    constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

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
        this.changeDetectorRef.detectChanges();
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
