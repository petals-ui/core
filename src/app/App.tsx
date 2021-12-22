import { IAppComponent, AppHeadlessComponent } from 'petals-ui/dist/app';

import {
  addClassNames,
  removeClassNames,
  BaseStructuralComponent,
} from '../basic';
import style from './style.scss';

const docRoot = document.documentElement;
const docBody = document.body;

class AppStructuralComponent
  extends BaseStructuralComponent<AppHeadlessComponent>
  implements IAppComponent {
  private addHostClassName(): void {
    addClassNames(docRoot, [this.getStyleClassName('Host')]);
    addClassNames(docBody, [this.getStyleClassName('Host-body')]);
  }

  private removeHostClassName(): void {
    removeClassNames(docRoot, [this.getStyleClassName('Host')]);
    removeClassNames(docBody, [this.getStyleClassName('Host-body')]);
  }

  constructor(props) {
    super(props);
    this.setComponents({ headless: new AppHeadlessComponent(this), style });
  }

  public componentDidMount(): void {
    this.addHostClassName();
  }

  public componentDidUpdate(): void {
    this.addHostClassName();
  }

  public componentWillUnmount(): void {
    this.removeHostClassName();
  }
}

export { AppStructuralComponent };
