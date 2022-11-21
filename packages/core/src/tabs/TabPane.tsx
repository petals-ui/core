import {
  ITabPaneComponent,
  TabPaneHeadlessComponent,
} from 'petals-ui/dist/tabs';

import { BaseStructuralComponent } from '../basic';

class TabPaneStructuralComponent extends BaseStructuralComponent<
  TabPaneHeadlessComponent,
  ITabPaneComponent
> {
  constructor(props) {
    super(props);
    this.setComponents({ headless: new TabPaneHeadlessComponent(props) });
  }
}

export { TabPaneStructuralComponent };
