import React, { createContext, useState} from 'react';
import { products } from '../products';
import { IProductProps, IOperatorProps, IMainContextProps, IMainContextProviderProps} from '../@types.filter';
import { SelectChangeEvent } from '@mui/material';

/**
 * MainContext Default Values
 */
const defaultValues: IMainContextProps = {
    productList: products,
    setProductList: ()=>{},
    searchValue: "",
    setSearchValue: () => {},
    filteredList: products,
    setFilteredList: () => {},
    operatorList:[],
    propertyList: [],
    setPropertyList: () => {},
    selectedProperty: "",
    setSelectedProperty: () => {},
    selectedOperator: "",
    setSelectedOperator: () => {},
    handleFilterProductList: () => {},
    handleChangeProperty: () => {},
    getProductProperties: () => {},
}

export const MainContext = createContext<IMainContextProps>(defaultValues);

const MainContextProvider: React.FC<IMainContextProviderProps> = ({ children }) => {
    const [productList, setProductList] = useState<IProductProps[]>(products)
    const [searchValue, setSearchValue] = useState<string>("");
    const [filteredList, setFilteredList] = useState<IProductProps[]>(productList);
    const [propertyList, setPropertyList] = useState<string[]>([""]);
    const [selectedProperty, setSelectedProperty] = useState<string>("");
    const [selectedOperator, setSelectedOperator] = useState<string>("");


    /**
     * Operator List
     */
    const operatorList: IOperatorProps[] = [
        {value: "ne",fullName: "Différent de"},
        {value: "eq",fullName: "Egal à"},
        {value: "gt",fullName: "Supérieur à"},
        {value: "it",fullName: "Inférieur à"},
    ];

    const handleFilterProductList = () => {
        let list: IProductProps[] = [];
        if(selectedProperty && selectedOperator && searchValue){
            list = productList.filter((product: IProductProps) => {
                const property = product[selectedProperty as keyof IProductProps];
                
                switch (selectedOperator) {
                    case "ne":
                        return !property.toString().includes(searchValue);
                    case "eq":
                        return property.toString().includes(searchValue);
                    case "gt":
                        return Number(property) > Number(searchValue);
                    case "it":
                        return Number(property) < Number(searchValue);
                    default:
                        return true;
                }
            })
            setFilteredList(list);
        }
        else{
            setFilteredList(productList);
        }
    };

    const handleChangeProperty = (event: SelectChangeEvent, actionNumber: number) => {
        switch (actionNumber) {
            case 1:
                setSelectedProperty(event.target.value as string);
                break;
            case 2:
                setSelectedOperator(event.target.value as string);
                break;
            case 3:
                setSearchValue(event.target.value as string);
                break;
            default:
                break;
        }
    };

    const getProductProperties = (product: IProductProps) => {
        let productPropertyList: string[] = [];
        for (const [property] of Object.entries(product)){
            productPropertyList.push(property)
        };
        setPropertyList(productPropertyList);
    }

    const value = {
        productList, setProductList,
        searchValue, setSearchValue,
        filteredList, setFilteredList,
        operatorList,
        propertyList, setPropertyList,
        selectedProperty, setSelectedProperty,
        selectedOperator, setSelectedOperator,
        handleFilterProductList, handleChangeProperty, getProductProperties
    }

    return (
        <MainContext.Provider
            value={value}
        >
            {children}
        </MainContext.Provider>
    );
};

export default MainContextProvider;
