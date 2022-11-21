import {
  IGridRowComponent,
  GridRowHeadlessComponent,
} from 'petals-ui/dist/grid';

import { BaseStructuralComponent } from '../basic';

class GridRowStructuralComponent extends BaseStructuralComponent<
  GridRowHeadlessComponent,
  IGridRowComponent
> {
  constructor(props) {
    super(props);
    this.setComponents({ headless: new GridRowHeadlessComponent(props) });
  }
}

export { GridRowStructuralComponent };
