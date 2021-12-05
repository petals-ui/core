import { Component } from 'react';

import { IBaseComponent } from 'petals-ui/dist/basic';

class BaseStructuralComponent<ComponentProps = IBaseComponent> extends Component<
  ComponentProps & IBaseComponent
> {}

export { BaseStructuralComponent };
