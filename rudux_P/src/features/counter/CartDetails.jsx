import { useSelector } from "react-redux";

export const CartSummary = () => {
  const total = useSelector((state) => state.addToCart.total);
  const product = useSelector((state) => state.addToCart.productList);

  return (
    <>
      {total ? (
        <>
          <h1 style={{ position: "absolute", top: "5px", right: "20px" }}>
            Product Name:
            {product.map((item) => (
              <h3>
                {" "}
                {item.productName} :{item.productPrice}
              </h3>
            ))}
          </h1>
          <h1 style={{ position: "absolute", top: "60px", right: "10px" }}>
            Total Amount:{total}
          </h1>
        </>
      ) : (
        <h1></h1>
      )}
    </>
  );
};
