import Container from "@mui/material/Container";
import Filter from "./components/Filter";
import { useContext, useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import { MainContext } from "./contexts/MainContext";

import { products } from "./products";

const App: React.FC = () => {
  const {
    selectedProperty,
    selectedOperator,
    searchValue,
    // eslint-disable-next-line
  } = useContext(MainContext);
  const [filteredList, setFilteredList] = useState<IProductProps[]>(products);
  const [propertyList] = useState(Object.keys(products[0]));

  const handleFilterProductList = () => {
    let list: IProductProps[] = [];
    if (selectedProperty && selectedOperator && searchValue) {
      console.log(selectedProperty, selectedOperator, searchValue);
      list = products.filter((product: IProductProps) => {
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
      });
      setFilteredList(list);
    } else {
      setFilteredList(products);
    }
  };

  useEffect(() => {
    handleFilterProductList();
    // eslint-disable-next-line
  }, [selectedProperty, selectedOperator, searchValue]);
  return (
    <Container maxWidth="lg" sx={{ padding: "30px" }}>
      <Filter propertyList={propertyList} />
      <ProductList products={filteredList} />
    </Container>
  );
};

export default App;
