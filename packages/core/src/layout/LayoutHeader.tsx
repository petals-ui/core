import {
  ILayoutHeaderComponent,
  LayoutHeaderHeadlessComponent,
} from 'petals-ui/dist/layout';

import { BaseStructuralComponent } from '../basic';
import style from './style.scss';

class LayoutHeaderStructuralComponent extends BaseStructuralComponent<
  LayoutHeaderHeadlessComponent,
  ILayoutHeaderComponent
> {
  constructor(props) {
    super(props);
    this.setComponents({
      headless: new LayoutHeaderHeadlessComponent(props),
      style,
    });
  }
}

export { LayoutHeaderStructuralComponent };
