import {
  ILayoutContainerComponent,
  LayoutContainerHeadlessComponent,
} from 'petals-ui/dist/layout';

import { BaseStructuralComponent } from '../basic';
import style from './style.scss';

class LayoutContainerStructuralComponent extends BaseStructuralComponent<
  LayoutContainerHeadlessComponent,
  ILayoutContainerComponent
> {
  constructor(props) {
    super(props);
    this.setComponents({
      headless: new LayoutContainerHeadlessComponent(props),
      style,
    });
  }
}

export { LayoutContainerStructuralComponent };
