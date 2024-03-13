export interface inputProps {
  label?: string;
  name?: string;
  placeholder?: string;
  onChange?: any;
  className?: string;
  type?: string;
  error?: string;
  onfocus?: any;
  value?: string;
  defaultValue?: string;
}

export interface selectProps {
  label?: string;
  name: string;
  onChange?: any;
  options: any;
  defaultValue?: any;
  value?: string;
  error?: string;
  onfocus?: any;
  className?: string;
}
