import {
  IDatePickerComponent,
  DatePickerHeadlessComponent,
} from 'petals-ui/dist/date-picker';

import { BaseStructuralComponent } from '../basic';

class DatePickerStructuralComponent extends BaseStructuralComponent<
  DatePickerHeadlessComponent,
  IDatePickerComponent
> {
  constructor(props) {
    super(props);
    this.setComponents({ headless: new DatePickerHeadlessComponent(props) });
  }
}

export { DatePickerStructuralComponent };
