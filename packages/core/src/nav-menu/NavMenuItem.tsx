import {
  INavMenuItemComponent,
  NavMenuItemHeadlessComponent,
} from 'petals-ui/dist/nav-menu';

import { BaseStructuralComponent } from '../basic';

class NavMenuItemStructuralComponent extends BaseStructuralComponent<
  NavMenuItemHeadlessComponent,
  INavMenuItemComponent
> {
  constructor(props) {
    super(props);
    this.setComponents({ headless: new NavMenuItemHeadlessComponent(props) });
  }
}

export { NavMenuItemStructuralComponent };
