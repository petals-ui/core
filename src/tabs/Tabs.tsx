import { TabThemeType } from 'petals-ui/dist/tab-bar';
import { ITabsComponent, TabsHeadlessComponent } from 'petals-ui/dist/tabs';

import { BaseStructuralComponent } from '../basic';

class TabsStructuralComponent extends BaseStructuralComponent<
  TabsHeadlessComponent,
  ITabsComponent,
  {},
  TabThemeType
> {
  constructor(props) {
    super(props);
    this.setComponents({ headless: new TabsHeadlessComponent(props) });
  }
}

export { TabsStructuralComponent };
