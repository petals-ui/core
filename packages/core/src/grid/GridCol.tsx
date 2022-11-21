import {
  IGridColComponent,
  GridColHeadlessComponent,
} from 'petals-ui/dist/grid';

import { BaseStructuralComponent } from '../basic';

class GridColStructuralComponent extends BaseStructuralComponent<
  GridColHeadlessComponent,
  IGridColComponent
> {
  constructor(props) {
    super(props);
    this.setComponents({ headless: new GridColHeadlessComponent(props) });
  }
}

export { GridColStructuralComponent };
