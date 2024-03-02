import { NgModule } from '@angular/core';
import { NgxExpandingTextComponent } from './ngx-expanding-text.component';
import { NgIf, NgTemplateOutlet } from '@angular/common';

@NgModule({
    declarations: [NgxExpandingTextComponent],
    imports: [NgTemplateOutlet, NgIf],
    exports: [NgxExpandingTextComponent],
})
export class NgxExpandingTextModule {}
