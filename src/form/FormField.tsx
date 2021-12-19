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
    this.setHeadlessComponent(new FormFieldHeadlessComponent(props));
  }
}

export { FormFieldStructuralComponent };
