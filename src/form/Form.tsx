import { IFormComponent, FormHeadlessComponent } from 'petals-ui/dist/form';

import { BaseStructuralComponent } from '../basic';

class FormStructuralComponent extends BaseStructuralComponent<
  FormHeadlessComponent,
  IFormComponent
> {
  constructor(props) {
    super(props);
    this.setComponents({ headless: new FormHeadlessComponent(props) });
  }
}

export { FormStructuralComponent };
