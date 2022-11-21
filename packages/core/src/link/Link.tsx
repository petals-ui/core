import { ILinkComponent, LinkHeadlessComponent } from 'petals-ui/dist/link';

import { BaseStructuralComponent } from '../basic';
// import style from './style.scss';

class LinkStructuralComponent extends BaseStructuralComponent<
  LinkHeadlessComponent,
  ILinkComponent
> {
  constructor(props) {
    super(props);
    this.setComponents({
      headless: new LinkHeadlessComponent(props) /*, style*/,
    });
  }
}

export { LinkStructuralComponent };
