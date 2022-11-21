import {
  ILayoutMainComponent,
  LayoutMainHeadlessComponent,
} from 'petals-ui/dist/layout';

import { BaseStructuralComponent } from '../basic';
import style from './style.scss';

class LayoutMainStructuralComponent extends BaseStructuralComponent<
  LayoutMainHeadlessComponent,
  ILayoutMainComponent
> {
  constructor(props) {
    super(props);
    this.setComponents({
      headless: new LayoutMainHeadlessComponent(props),
      style,
    });
  }
}

export { LayoutMainStructuralComponent };
