import {
  IUrlInputComponent,
  UrlInputHeadlessComponent,
} from 'petals-ui/dist/url-input';

import { BaseStructuralComponent } from '../basic';

class UrlInputStructuralComponent<
  S extends Record<string, any> = {}
> extends BaseStructuralComponent<
  UrlInputHeadlessComponent,
  IUrlInputComponent,
  S
> {
  constructor(props) {
    super(props);
    this.setComponents({ headless: new UrlInputHeadlessComponent(props) });
  }
}

export { UrlInputStructuralComponent };
