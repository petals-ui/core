import {
  IButtonComponent,
  ButtonHeadlessComponent,
} from 'petals-ui/dist/button';

import { BaseStructuralComponent } from '../basic';
import style from './style.scss';

class ButtonStructuralComponent extends BaseStructuralComponent<
  ButtonHeadlessComponent,
  IButtonComponent
> {
  constructor(props) {
    super(props);
    this.setComponents({ headless: new ButtonHeadlessComponent(props), style });
  }
}

export { ButtonStructuralComponent };
