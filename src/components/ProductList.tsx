import { useContext } from "react";
import { MainContext } from "../contexts/MainContext";
import { Box } from "@mui/material";

const ProductList: React.FC = () => {
    const {filteredList} = useContext(MainContext);
    return (
        <>    
            <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
                
                {
                    filteredList.map((product)=>{
                        return(
                            <Box
                                key={product.id}
                            >
                                <div style={{
                                    border:"1px solid black",
                                    borderRadius:"5px",
                                    display:"flex",
                                    flexDirection:"column",
                                    justifyContent:"center",
                                    alignItems:"center",
                                    padding:"10px",
                                    gap:"10px"
                                }}>
                                    <img src={product.imgLink} alt={`produit${product.id}`} 
                                        style={{
                                            height:"150px",
                                            width:"150px"
                                        }}
                                    />
                                    <span>Id : {product.id}</span>
                                    <span>Title : {product.title}</span>
                                    <span>Price : {product.price}€</span>
                                    <span>Category : {product.category}</span>
                                    <span>Available : {product.available ? "true": "false"}</span>
                                </div>
                            </Box>
                        )
                    })
                }
            </Box>
        </>
    );
}

export default ProductList;