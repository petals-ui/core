import { Component } from 'react';

import { IBaseComponent, BaseHeadlessComponent } from 'petals-ui/dist/basic';

import { ComponentTag } from './typing';

class BaseStructuralComponent<
  HeadlessComponent = BaseHeadlessComponent,
  ComponentProps = IBaseComponent<ComponentTag>,
  ComponentState extends Record<string, any> = {}
> extends Component<ComponentProps & IBaseComponent, ComponentState> {
  private __hc!: HeadlessComponent;

  protected setHeadlessComponent(hc: HeadlessComponent): void {
    this.__hc = hc;
  }

  protected getHeadlessComponent(): HeadlessComponent | null {
    return this.__hc || null;
  }
}

export { BaseStructuralComponent };
