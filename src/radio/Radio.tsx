import { IRadioComponent, RadioHeadlessComponent } from 'petals-ui/dist/radio';

import { BaseStructuralComponent } from '../basic';

class RadioStructuralComponent extends BaseStructuralComponent<
  RadioHeadlessComponent,
  IRadioComponent
> {
  constructor(props) {
    super(props);
    this.setComponents({ headless: new RadioHeadlessComponent(props) });
  }
}

export { RadioStructuralComponent };
