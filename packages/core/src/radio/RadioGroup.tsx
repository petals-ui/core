import {
  IRadioGroupComponent,
  RadioGroupHeadlessComponent,
} from 'petals-ui/dist/radio';

import { BaseStructuralComponent } from '../basic';

class RadioGroupStructuralComponent extends BaseStructuralComponent<
  RadioGroupHeadlessComponent,
  IRadioGroupComponent
> {
  constructor(props) {
    super(props);
    this.setComponents({ headless: new RadioGroupHeadlessComponent(props) });
  }
}

export { RadioGroupStructuralComponent };
