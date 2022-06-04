import {CSSProperties} from "react";

export type selectType = 'select'|'create';

export interface customStyleReactSelect{
  multiValueRemove?: CSSProperties,
  multiValue?: CSSProperties,
  singleValue?: CSSProperties,
  control?: CSSProperties,
  clearIndicator?: CSSProperties,
  container?: CSSProperties,
  dropdownIndicator?: Record<any,any>| CSSProperties,
  group?: CSSProperties,
  groupHeading?: CSSProperties,
  indicatorsContainer?: CSSProperties,
  indicatorSeparator?: CSSProperties,
  input?: CSSProperties,
  loadingIndicator?: CSSProperties,
  loadingMessage?: CSSProperties,
  menu?: CSSProperties,
  menuList?: CSSProperties,
  menuPortal?: CSSProperties,
  multiValueLabel?: CSSProperties,
  noOptionsMessage?: CSSProperties,
  option?: CSSProperties,
  placeholder?: CSSProperties,
  valueContainer?: CSSProperties,
}

export interface Option<T>{
  label: string;
  value: T|undefined;
}