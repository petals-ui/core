import {
  IDataTableComponent,
  DataTableHeadlessComponent,
} from 'petals-ui/dist/data-table';

import { BaseStructuralComponent } from '../basic';
import style from './style.scss';

class DataTableStructuralComponent extends BaseStructuralComponent<
  DataTableHeadlessComponent,
  IDataTableComponent
> {
  constructor(props) {
    super(props);
    this.setComponents({
      headless: new DataTableHeadlessComponent(props),
      style,
    });
  }
}

export { DataTableStructuralComponent };
