import { Box } from "@mui/material";

interface IProductListProps {
  products: IProductProps[];
}

const ProductList: React.FC<IProductListProps> = ({ products }) => {
  return (
    <>
      <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
        {products.map((product) => {
          return (
            <Box key={product.id}>
              <div
                style={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                  gap: "10px",
                }}
              >
                <img
                  src={product.imgLink}
                  alt={`produit${product.id}`}
                  style={{
                    height: "150px",
                    width: "150px",
                  }}
                />
                <span>Title : {product.title}</span>
                <span>Price : {product.price}€</span>
                <span>Category : {product.category}</span>
                <span>Available : {product.available ? "true" : "false"}</span>
              </div>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default ProductList;
