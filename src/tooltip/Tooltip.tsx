import {
  ITooltipComponent,
  TooltipHeadlessComponent,
} from 'petals-ui/dist/tooltip';

import { BaseStructuralComponent } from '../basic';

class TooltipStructuralComponent extends BaseStructuralComponent<
  TooltipHeadlessComponent,
  ITooltipComponent
> {
  constructor(props) {
    super(props);
    this.setComponents({ headless: new TooltipHeadlessComponent(props) });
  }
}

export { TooltipStructuralComponent };
