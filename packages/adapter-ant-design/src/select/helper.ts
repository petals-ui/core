import { SelectValueType } from 'petals-ui/dist/select';

// hack for https://github.com/ant-design/ant-design/issues/2367
function hackDisplayValue(value: any): SelectValueType | undefined {
  return value == null || value === '' ? undefined : value;
}

export { hackDisplayValue };
