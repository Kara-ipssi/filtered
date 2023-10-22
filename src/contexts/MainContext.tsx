import React, { createContext, useState } from "react";
import {
  IOperatorProps,
  IMainContextProps,
  IMainContextProviderProps,
} from "../@types.filter";
import { SelectChangeEvent } from "@mui/material";

/**
 * MainContext Default Values
 */
const defaultValues: IMainContextProps = {
  searchValue: "",
  setSearchValue: () => {},
  operatorList: [],
  propertyList: [],
  setPropertyList: () => {},
  selectedProperty: "",
  setSelectedProperty: () => {},
  selectedOperator: "",
  setSelectedOperator: () => {},
  handleChangeProperty: () => {},
};

export const MainContext = createContext<IMainContextProps>(defaultValues);

const MainContextProvider: React.FC<IMainContextProviderProps> = ({
  children,
}) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [propertyList, setPropertyList] = useState<string[]>([""]);
  const [selectedProperty, setSelectedProperty] = useState<string>("");
  const [selectedOperator, setSelectedOperator] = useState<string>("");

  /**
   * Operator List
   */
  const operatorList: IOperatorProps[] = [
    { value: "ne", fullName: "Différent de" },
    { value: "eq", fullName: "Egal à" },
    { value: "gt", fullName: "Supérieur à" },
    { value: "it", fullName: "Inférieur à" },
  ];

  const handleChangeProperty = (
    event: SelectChangeEvent,
    actionNumber: number
  ) => {
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

  const value = {
    searchValue,
    setSearchValue,
    operatorList,
    propertyList,
    setPropertyList,
    selectedProperty,
    setSelectedProperty,
    selectedOperator,
    setSelectedOperator,
    handleChangeProperty,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export default MainContextProvider;
