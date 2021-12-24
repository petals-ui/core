import { IIconComponent, IconHeadlessComponent } from 'petals-ui/dist/icon';

import { BaseStructuralComponent } from '../basic';
import { IconComponentState } from './typing';
import style from './style.scss';

class IconStructuralComponent extends BaseStructuralComponent<
  IconHeadlessComponent,
  IIconComponent,
  IconComponentState
> {
  public readonly state = {
    iconType: 'font',
    iconRef: '',
  } as IconComponentState;

  constructor(props) {
    super(props);
    this.setComponents({ headless: new IconHeadlessComponent(props), style });
  }

  public componentWillMount(): void {
    const hc = this.getHeadlessComponent()!;

    this.setState({
      iconType: hc.getOption().type,
      iconRef: hc.getSvgIconRef(),
    });
  }
}

export { IconStructuralComponent };
