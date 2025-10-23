export interface NavMenuItems {
  label: string;
  route?: string;
  icon?: string;
  subItems?: NavMenuItems[];
  isOpen?: boolean;
  roles?: string[];
}
