export interface inputProps {
  label: string;
  name: string;
  placeholder: string;
  onChange: any;
  className?: string;
  type?: string;
  error?: string;
  value: string | number | null;
}

export interface selectProps {
  label: string;
  name: string;
  error?: string;
  className?: string;
  onChange: any;
  options: any;
  value: string | number| null;
}
