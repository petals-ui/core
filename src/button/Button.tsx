import {
  IButtonComponent,
  ButtonHeadlessComponent,
} from 'petals-ui/dist/button';

import { BaseStructuralComponent } from '../basic';

class ButtonStructuralComponent extends BaseStructuralComponent<
  ButtonHeadlessComponent,
  IButtonComponent
> {
  constructor(props) {
    super(props);
    this.setHeadlessComponent(new ButtonHeadlessComponent(props));
  }
}

export { ButtonStructuralComponent };
