import {
  ILayoutFooterComponent,
  LayoutFooterHeadlessComponent,
} from 'petals-ui/dist/layout';

import { BaseStructuralComponent } from '../basic';
import style from './style.scss';

class LayoutFooterStructuralComponent extends BaseStructuralComponent<
  LayoutFooterHeadlessComponent,
  ILayoutFooterComponent
> {
  constructor(props) {
    super(props);
    this.setComponents({
      headless: new LayoutFooterHeadlessComponent(props),
      style,
    });
  }
}

export { LayoutFooterStructuralComponent };
