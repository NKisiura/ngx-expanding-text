# NgxExpandingText
ngx-expanding-text is a component that wraps text and allows it to be expanded or collapsed. It is useful for displaying long text in a limited space.

## Preview
[Demo App Link](https://nkisiura.github.io/ngx-expanding-text)

## Installation
Run the following command to install the library
```
npm install ngx-expanding-text
```

## Usage
1. Import the `NgxExpandingTextModule` in your module:
```typescript
import { NgxExpandingTextModule } from 'ngx-expanding-text';

@NgModule({
    declarations: [
        // ...
    ],
    imports: [
        NgxExpandingTextModule
    ],
    providers: [
        //...
    ]
})
```

2. Use the `ngx-expanding-text` component in your template:
```html

<ngx-expanding-text
        [text]="'Your long text goes here...'"
></ngx-expanding-text>
```

## Versions
| Angular          | ngx-expanding-text |
|------------------|:------------------:|
| >=12.0.0 <13.0.0 |       v12.x        |

## Configuration

### Input
| Input name         | Explanation                                            | Mandatory | Type/Supported Values | Default value |
|--------------------|--------------------------------------------------------|-----------|-----------------------|---------------|
| text               | The raw text to be displayed in the component.         | yes       | string                | ''            |
| charCountLimit     | The character count limit for the collapsed text view. | no        | number                | 100           |
| showEllipsis       | Whether to show ellipsis when the text is collapsed.   | no        | boolean               | true          |
| initiallyExpanded  | Whether the text should be initially expanded.         | no        | boolean               | false         |
| moreButtonText     | The text for the 'Show More' button.                   | no        | string                | 'Show More'   |
| lessButtonText     | The text for the 'Show Less' button.                   | no        | string                | 'Show Less'   |
| moreButtonTemplate | A custom template for the 'Show More' button.          | no        | TemplateRef<any>      | null          |
| lessButtonTemplate | A custom template for the 'Show Less' button.          | no        | TemplateRef<any>      | null          |

### Output
| Output name | Explanation                                                      | Mandatory | Type/Supported Values                 |
|-------------|------------------------------------------------------------------|-----------|---------------------------------------|
| toggle      | An event that is emitted when the text is expanded or collapsed. | no        | TextToggleEvent {isExpanded: boolean} |
