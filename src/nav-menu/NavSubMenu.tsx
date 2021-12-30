import {
  INavSubMenuComponent,
  NavSubMenuHeadlessComponent,
} from 'petals-ui/dist/nav-menu';

import { BaseStructuralComponent } from '../basic';

class NavSubMenuStructuralComponent extends BaseStructuralComponent<
  NavSubMenuHeadlessComponent,
  INavSubMenuComponent
> {
  constructor(props) {
    super(props);
    this.setComponents({ headless: new NavSubMenuHeadlessComponent(props) });
  }
}

export { NavSubMenuStructuralComponent };
