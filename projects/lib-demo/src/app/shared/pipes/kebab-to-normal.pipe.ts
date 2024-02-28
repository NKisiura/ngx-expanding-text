import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'kebabToNormal',
})
export class KebabToNormalPipe implements PipeTransform {
    transform(value: string): string {
        if (!value) return '';

        return value.replace(/-/g, ' ');
    }
}
