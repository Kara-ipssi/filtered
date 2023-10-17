import Container from '@mui/material/Container';
import Filter from './components/Filter';
import { useContext, useEffect } from 'react';
import ProductList from './components/ProductList';
import { MainContext } from './contexts/MainContext';

const App:React.FC = () => {

    const {
        productList,
        getProductProperties, handleFilterProductList,
        selectedProperty, selectedOperator, searchValue
        // eslint-disable-next-line
    } = useContext(MainContext);

    useEffect(()=>{
        getProductProperties(productList[0])
        // eslint-disable-next-line
    },[])

    useEffect(()=>{
        handleFilterProductList()
        // eslint-disable-next-line
    },[selectedProperty, selectedOperator, searchValue])
    return(
        <Container maxWidth="lg" sx={{ padding:"30px" }}>
            <Filter />
            <ProductList/>
        </Container>
    )
}

export default App;
