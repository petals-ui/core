import {
  INavMenuItemGroupComponent,
  NavMenuItemGroupHeadlessComponent,
} from 'petals-ui/dist/nav-menu';

import { BaseStructuralComponent } from '../basic';

class NavMenuItemGroupStructuralComponent extends BaseStructuralComponent<
  NavMenuItemGroupHeadlessComponent,
  INavMenuItemGroupComponent
> {
  constructor(props) {
    super(props);
    this.setComponents({
      headless: new NavMenuItemGroupHeadlessComponent(props),
    });
  }
}

export { NavMenuItemGroupStructuralComponent };
