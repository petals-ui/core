import {
  ILayoutMainComponent,
  LayoutMainHeadlessComponent,
} from 'petals-ui/dist/layout';

import { BaseStructuralComponent } from '../basic';

class LayoutMainStructuralComponent extends BaseStructuralComponent<
  LayoutMainHeadlessComponent,
  ILayoutMainComponent
> {
  constructor(props) {
    super(props);
    this.setHeadlessComponent(new LayoutMainHeadlessComponent(props));
  }
}

export { LayoutMainStructuralComponent };
