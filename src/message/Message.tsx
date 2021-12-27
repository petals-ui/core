import {
  IMessageComponent,
  MessageHeadlessComponent,
} from 'petals-ui/dist/message';

import { BaseStructuralComponent } from '../basic';

class MessageStructuralComponent extends BaseStructuralComponent<
  MessageHeadlessComponent,
  IMessageComponent
> {
  constructor(props) {
    super(props);
    this.setComponents({ headless: new MessageHeadlessComponent(props) });
  }
}

export { MessageStructuralComponent };
