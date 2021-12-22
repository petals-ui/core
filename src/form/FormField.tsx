import {
  IFormFieldComponent,
  FormFieldHeadlessComponent,
} from 'petals-ui/dist/form';

import { BaseStructuralComponent } from '../basic';

class FormFieldStructuralComponent extends BaseStructuralComponent<
  FormFieldHeadlessComponent,
  IFormFieldComponent
> {
  constructor(props) {
    super(props);
    this.setComponents({ headless: new FormFieldHeadlessComponent(props) });
  }
}

export { FormFieldStructuralComponent };
