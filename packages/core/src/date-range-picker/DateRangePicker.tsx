import {
  IDateRangePickerComponent,
  DateRangePickerHeadlessComponent,
} from 'petals-ui/dist/date-range-picker';

import { BaseStructuralComponent } from '../basic';

class DateRangePickerStructuralComponent extends BaseStructuralComponent<
  DateRangePickerHeadlessComponent,
  IDateRangePickerComponent
> {
  constructor(props) {
    super(props);
    this.setComponents({
      headless: new DateRangePickerHeadlessComponent(props),
    });
  }
}

export { DateRangePickerStructuralComponent };
