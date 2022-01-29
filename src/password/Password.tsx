import {
  IPasswordComponent,
  PasswordHeadlessComponent,
} from 'petals-ui/dist/password';

import { BaseStructuralComponent } from '../basic';

class PasswordStructuralComponent extends BaseStructuralComponent<
  PasswordHeadlessComponent,
  IPasswordComponent
> {
  constructor(props) {
    super(props);
    this.setComponents({ headless: new PasswordHeadlessComponent(props) });
  }
}

export { PasswordStructuralComponent };
