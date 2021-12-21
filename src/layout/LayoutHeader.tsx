import {
  ILayoutHeaderComponent,
  LayoutHeaderHeadlessComponent,
} from 'petals-ui/dist/layout';

import { BaseStructuralComponent } from '../basic';

class LayoutHeaderStructuralComponent extends BaseStructuralComponent<
  LayoutHeaderHeadlessComponent,
  ILayoutHeaderComponent
> {
  constructor(props) {
    super(props);
    this.setHeadlessComponent(new LayoutHeaderHeadlessComponent(props));
  }
}

export { LayoutHeaderStructuralComponent };
