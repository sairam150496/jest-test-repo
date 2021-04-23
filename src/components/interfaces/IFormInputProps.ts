import { ITableRowProps } from "./ITableRowProps";

export interface IFormInputProps {
  onSubmit: (data: ITableRowProps) => void;
  name?: string;
  email?: string;
  phoneNumber?: number;
  userId?: string;
}
