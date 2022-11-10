export interface CustomSetterFormItemProps<T = any> {
  value?: T;
  onChange?: (value: T) => void
}
