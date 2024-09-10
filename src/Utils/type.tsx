export interface StudentInt {
  avatar: string;
  id: string;
  forename: string;
  surname: string;
  form: string;
  send: boolean;
}
export interface Column {
  key: string;
  name: string;
  minWidth?: number;
  align?: "center";
  format?: (value: number) => string;
}

export type TableColumns = Column[];
