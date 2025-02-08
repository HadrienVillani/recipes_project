export interface IButton {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement> | number) => void;
  style?: string;
}
