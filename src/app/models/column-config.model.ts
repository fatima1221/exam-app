export interface ColumnConfig {
  key: string;
  label: string;
  type?: 'text' | 'number' | 'date';
  editable?: boolean;
}
