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
| >=17.0.0 <18.0.0 |       v17.x        |
| >=16.0.0 <17.0.0 |       v16.x        |
| >=15.0.0 <16.0.0 |       v15.x        |
| >=14.0.0 <15.0.0 |       v14.x        |
| >=13.0.0 <14.0.0 |       v13.x        |
| >=12.0.0 <13.0.0 |       v12.x        |

## Configuration

### Inputs
| Input                | Type               | Default     | Required | Description                                            |
|----------------------|--------------------|-------------|----------|--------------------------------------------------------|
| [text]               | `string`           | ''          | yes      | The raw text to be displayed in the component.         |
| [charCountLimit]     | `number`           | 100         | no       | The character count limit for the collapsed text view. |
| [showEllipsis]       | `boolean`          | true        | no       | Whether to show ellipsis when the text is collapsed.   |
| [initiallyExpanded]  | `boolean`          | false       | no       | Whether the text should be initially expanded.         |
| [moreButtonText]     | `string`           | 'Show More' | no       | The text for the 'Show More' button.                   |
| [lessButtonText]     | `string`           | 'Show Less' | no       | The text for the 'Show Less' button.                   |
| [moreButtonTemplate] | `TemplateRef<any>` | null        | no       | A custom template for the 'Show More' button.          |
| [lessButtonTemplate] | `TemplateRef<any>` | null        | no       | A custom template for the 'Show Less' button.          |

### Output
| Output name | Type                                    | Description                                                      |
|-------------|-----------------------------------------|------------------------------------------------------------------|
| (toggle)    | TextToggleEvent `{isExpanded: boolean}` | An event that is emitted when the text is expanded or collapsed. |

### Methods
| Method name | Description                                       |
|-------------|---------------------------------------------------|
| toggle      | Toggles the expanded/collapsed state of the text. |

## Maintenance
Prepare github pages for the demo app:
```
ng build lib-demo --configuration production --base-href https://nkisiura.github.io/ngx-expanding-text/
```
