import { ChangeEvent } from 'react';

type TSelectData = {value:string, text:string}[]

export interface IFormSelect {
    data: TSelectData
    label: string;
    name: string;
}
export interface ISelect {
    data: TSelectData,
    name: string
    dataName?:string,
    selected:string;
    onChange:(event:  ChangeEvent<HTMLSelectElement>) => void
}

export interface IWithLabel {
    label: string;
    white?: boolean;
}
export interface IFormInput {
    label: string;
    name: string;
    white?: boolean;
}
