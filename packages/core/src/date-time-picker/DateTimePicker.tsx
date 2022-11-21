import {
  IDateTimePickerComponent,
  DateTimePickerHeadlessComponent,
} from 'petals-ui/dist/date-time-picker';

import { BaseStructuralComponent } from '../basic';

class DateTimePickerStructuralComponent extends BaseStructuralComponent<
  DateTimePickerHeadlessComponent,
  IDateTimePickerComponent
> {
  constructor(props) {
    super(props);
    this.setComponents({
      headless: new DateTimePickerHeadlessComponent(props),
    });
  }
}

export { DateTimePickerStructuralComponent };
