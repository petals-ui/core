import {
  IDataTableComponent,
  DataTableHeadlessComponent,
} from 'petals-ui/dist/data-table';

import { BaseStructuralComponent } from '../basic';

class DataTableStructuralComponent extends BaseStructuralComponent<
  DataTableHeadlessComponent,
  IDataTableComponent
> {
  constructor(props) {
    super(props);
    this.setHeadlessComponent(new DataTableHeadlessComponent(props));
  }
}

export { DataTableStructuralComponent };
