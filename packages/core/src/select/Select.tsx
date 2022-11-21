import {
  ISelectComponent,
  SelectHeadlessComponent,
} from 'petals-ui/dist/select';

import { BaseStructuralComponent } from '../basic';

class SelectStructuralComponent extends BaseStructuralComponent<
  SelectHeadlessComponent,
  ISelectComponent
> {
  constructor(props) {
    super(props);
    this.setComponents({ headless: new SelectHeadlessComponent(props) });
  }
}

export { SelectStructuralComponent };
