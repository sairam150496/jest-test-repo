import { ITableRowProps } from "./ITableRowProps";

export interface ITableInputProps {
  rows: Map<string, ITableRowProps>;
  onDeleteClick?: (e: any) => void;
  onEditClick?: (e: any) => void;
  onAddClick?: (e: any) => void;
}
