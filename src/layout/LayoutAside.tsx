import {
  ILayoutAsideComponent,
  LayoutAsideHeadlessComponent,
} from 'petals-ui/dist/layout';

import { BaseStructuralComponent } from '../basic';

class LayoutAsideStructuralComponent extends BaseStructuralComponent<
  LayoutAsideHeadlessComponent,
  ILayoutAsideComponent
> {
  constructor(props) {
    super(props);
    this.setHeadlessComponent(new LayoutAsideHeadlessComponent(props));
  }
}

export { LayoutAsideStructuralComponent };
