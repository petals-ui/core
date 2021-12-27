import { IWaitComponent, WaitHeadlessComponent } from 'petals-ui/dist/wait';

import { BaseStructuralComponent } from '../basic';

class WaitStructuralComponent extends BaseStructuralComponent<
  WaitHeadlessComponent,
  IWaitComponent
> {
  constructor(props) {
    super(props);
    this.setComponents({ headless: new WaitHeadlessComponent(props) });
  }
}

export { WaitStructuralComponent };
