import {
  ILayoutContainerComponent,
  LayoutContainerHeadlessComponent,
} from 'petals-ui/dist/layout';

import { BaseStructuralComponent } from '../basic';

class LayoutContainerStructuralComponent extends BaseStructuralComponent<
  LayoutContainerHeadlessComponent,
  ILayoutContainerComponent
> {
  constructor(props) {
    super(props);
    this.setHeadlessComponent(new LayoutContainerHeadlessComponent(props));
  }
}

export { LayoutContainerStructuralComponent };
