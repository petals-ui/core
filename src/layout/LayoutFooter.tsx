import {
  ILayoutFooterComponent,
  LayoutFooterHeadlessComponent,
} from 'petals-ui/dist/layout';

import { BaseStructuralComponent } from '../basic';

class LayoutFooterStructuralComponent extends BaseStructuralComponent<
  LayoutFooterHeadlessComponent,
  ILayoutFooterComponent
> {
  constructor(props) {
    super(props);
    this.setHeadlessComponent(new LayoutFooterHeadlessComponent(props));
  }
}

export { LayoutFooterStructuralComponent };
