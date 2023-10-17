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
    productList: IProductProps[];
    setProductList: Dispatch<SetStateAction<IProductProps[]>>;
    searchValue: string;
    setSearchValue: Dispatch<SetStateAction<string>>;
    filteredList: IProductProps[];
    setFilteredList: Dispatch<SetStateAction<IProductProps[]>>;
    operatorList: IOperatorProps[];
    propertyList: string[];
    setPropertyList: Dispatch<SetStateAction<string[]>>;
    selectedProperty: string;
    setSelectedProperty: Dispatch<SetStateAction<string>>;
    selectedOperator: string;
    setSelectedOperator: Dispatch<SetStateAction<string>>;
    handleFilterProductList: () => void;
    handleChangeProperty: (event: SelectChangeEvent, selectNum: number) => void;
    getProductProperties: (product: IProductProps) => void;
};

export interface IMainContextProviderProps {
    children: React.ReactNode;
};