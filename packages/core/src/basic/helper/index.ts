import { isBoolean } from '@ntks/toolbox';

function convertToCamelCase(kebabCase: string): string {
  return kebabCase
    .split('-')
    .map(part => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join('');
}

function resolveBooleanPropValue(propValue: boolean | undefined, defaultValue: boolean): boolean {
  return isBoolean(propValue) ? propValue! : defaultValue;
}

function getComponentName(moduleName: string, prefix: string = 'Zora'): string {
  return `${prefix}${convertToCamelCase(moduleName)}`;
}

export { resolveBooleanPropValue, getComponentName };

export * from '@ntks/toolbox';

export * from './dom';
export * from './component';
