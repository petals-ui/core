import {
  INavMenuComponent,
  NavMenuHeadlessComponent,
} from 'petals-ui/dist/nav-menu';

import { BaseStructuralComponent } from '../basic';

class NavMenuStructuralComponent extends BaseStructuralComponent<
  NavMenuHeadlessComponent,
  INavMenuComponent
> {
  constructor(props) {
    super(props);
    this.setComponents({ headless: new NavMenuHeadlessComponent(props) });
  }
}

export { NavMenuStructuralComponent };
