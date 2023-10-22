import { SelectChangeEvent } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

export interface IProductProps {
    id: string;
    category: string;
    title: string;
    price: string;
    imgLink: string;
    available: boolean;
    categoryId: string;
}


export interface IOperatorProps {
    value: string,
    fullName: string,
}

/**
 * IMainContextProps
 */
export interface IMainContextProps {
    searchValue: string;
    setSearchValue: Dispatch<SetStateAction<string>>;
    operatorList: IOperatorProps[];
    propertyList: string[];
    setPropertyList: Dispatch<SetStateAction<string[]>>;
    selectedProperty: string;
    setSelectedProperty: Dispatch<SetStateAction<string>>;
    selectedOperator: string;
    setSelectedOperator: Dispatch<SetStateAction<string>>;
    handleChangeProperty: (event: SelectChangeEvent, selectNum: number) => void;
};

export interface IMainContextProviderProps {
    children: React.ReactNode;
};