import {
  IDateTimeRangePickerComponent,
  DateTimeRangePickerHeadlessComponent,
} from 'petals-ui/dist/date-time-range-picker';

import { BaseStructuralComponent } from '../basic';

class DateTimeRangePickerStructuralComponent extends BaseStructuralComponent<
  DateTimeRangePickerHeadlessComponent,
  IDateTimeRangePickerComponent
> {
  constructor(props) {
    super(props);
    this.setComponents({
      headless: new DateTimeRangePickerHeadlessComponent(props),
    });
  }
}

export { DateTimeRangePickerStructuralComponent };
