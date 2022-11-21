import { isBoolean, isString } from '@ntks/toolbox';
import { ReactNode } from 'react';

function isSpecificComponent(vNode: ReactNode, componentName: string): boolean {
  return vNode != null && !isBoolean(vNode) && !isString(vNode)
    ? (vNode as any).type && (vNode as any).type.displayName === componentName
    : false;
}

export { isSpecificComponent };
