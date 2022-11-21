import { CSSProperties, Component } from 'react';

import {
  StateClassNamePrefix,
  IBaseComponent,
  getDescendantClassName,
  BaseHeadlessComponent,
} from 'petals-ui/dist/basic';

import { ComponentTag } from './typing';

class BaseStructuralComponent<
  HeadlessComponent = BaseHeadlessComponent,
  ComponentProps = IBaseComponent<ComponentTag>,
  ComponentState extends Record<string, any> = {},
  ComponentTheme extends string = string
> extends Component<
  Partial<
    IBaseComponent<ComponentTag, CSSProperties, ComponentTheme> & ComponentProps
  >,
  ComponentState
> {
  private __hc!: HeadlessComponent;

  private __style!: Record<string, string>;

  private setStyleClassNames(styleClassNames: Record<string, string>): void {
    this.__style = styleClassNames;
  }

  private setHeadlessComponent(hc: HeadlessComponent): void {
    this.__hc = hc;
  }

  protected getHeadlessComponent(): HeadlessComponent | null {
    return this.__hc || null;
  }

  protected setComponents({
    headless,
    style,
  }: {
    headless: HeadlessComponent;
    style?: Record<string, string>;
  }): void {
    this.setHeadlessComponent(headless);

    if (style) {
      this.setStyleClassNames(style);
    }
  }

  protected getStyleClassName(className: string): string {
    return (this.__style || {})[className] || '';
  }

  protected getComponentClassNames(): string {
    return [
      ...(this.__hc as any)
        .getClassNames()
        .map((cls: string) => this.getStyleClassName(cls)),
      this.props.theme
        ? this.getModifierClassName(this.props.theme as string)
        : '',
      ...(this.__hc as any).getExtraClassNames(),
    ]
      .filter((cls) => !!cls)
      .join(' ');
  }

  protected getDescendantClassName(descendant: string): string {
    return this.getStyleClassName(
      (this.__hc as any).getDescendantClassName(descendant),
    );
  }

  protected getModifierClassName(modifier: string): string {
    return this.getStyleClassName(
      (this.__hc as any).getModifierClassName(modifier),
    );
  }

  protected getStateClassName(
    state: string,
    prefix?: StateClassNamePrefix,
  ): string {
    return this.getStyleClassName(
      (this.__hc as any).getStateClassName(state, prefix),
    );
  }

  protected getParentDescendantClassName(descendant: string): string {
    const parentComponentName: string = (this
      .__hc as any).getParentComponentName();

    return parentComponentName
      ? this.getStyleClassName(
          getDescendantClassName(parentComponentName, descendant),
        )
      : '';
  }
}

export { BaseStructuralComponent };
