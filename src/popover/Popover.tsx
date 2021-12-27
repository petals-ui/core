import {
  IPopoverComponent,
  PopoverHeadlessComponent,
} from 'petals-ui/dist/popover';

import { BaseStructuralComponent } from '../basic';

class PopoverStructuralComponent extends BaseStructuralComponent<
  PopoverHeadlessComponent,
  IPopoverComponent
> {
  constructor(props) {
    super(props);
    this.setComponents({ headless: new PopoverHeadlessComponent(props) });
  }
}

export { PopoverStructuralComponent };
