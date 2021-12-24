import {
  ITextAreaComponent,
  TextAreaHeadlessComponent,
} from 'petals-ui/dist/text-area';

import { BaseStructuralComponent } from '../basic';

class TextAreaStructuralComponent extends BaseStructuralComponent<
  TextAreaHeadlessComponent,
  ITextAreaComponent
> {
  constructor(props) {
    super(props);
    this.setComponents({ headless: new TextAreaHeadlessComponent(props) });
  }
}

export { TextAreaStructuralComponent };
