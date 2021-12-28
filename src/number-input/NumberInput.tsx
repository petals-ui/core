import {
  INumberInputComponent,
  NumberInputHeadlessComponent,
} from 'petals-ui/dist/number-input';

import { BaseStructuralComponent } from '../basic';

class NumberInputStructuralComponent extends BaseStructuralComponent<
  NumberInputHeadlessComponent,
  INumberInputComponent
> {
  constructor(props) {
    super(props);
    this.setComponents({ headless: new NumberInputHeadlessComponent(props) });
  }
}

export { NumberInputStructuralComponent };
