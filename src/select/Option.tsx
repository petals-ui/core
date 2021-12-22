import {
  ISelectOptionComponent,
  SelectOptionHeadlessComponent,
} from 'petals-ui/dist/select';

import { BaseStructuralComponent } from '../basic';

class SelectOptionStructuralComponent extends BaseStructuralComponent<
  SelectOptionHeadlessComponent,
  ISelectOptionComponent
> {
  constructor(props) {
    super(props);
    this.setComponents({ headless: new SelectOptionHeadlessComponent(props) });
  }
}

export { SelectOptionStructuralComponent };
