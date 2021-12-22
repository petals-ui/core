import {
  ILayoutAsideComponent,
  LayoutAsideHeadlessComponent,
} from 'petals-ui/dist/layout';

import { BaseStructuralComponent } from '../basic';
import style from './style.scss';

class LayoutAsideStructuralComponent extends BaseStructuralComponent<
  LayoutAsideHeadlessComponent,
  ILayoutAsideComponent
> {
  constructor(props) {
    super(props);
    this.setComponents({
      headless: new LayoutAsideHeadlessComponent(props),
      style,
    });
  }
}

export { LayoutAsideStructuralComponent };
