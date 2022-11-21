import {
  IDialogComponent,
  DialogHeadlessComponent,
} from 'petals-ui/dist/dialog';

import { BaseStructuralComponent } from '../basic';

class DialogStructuralComponent extends BaseStructuralComponent<
  DialogHeadlessComponent,
  IDialogComponent
> {
  constructor(props) {
    super(props);
    this.setComponents({ headless: new DialogHeadlessComponent(props) });
  }
}

export { DialogStructuralComponent };
