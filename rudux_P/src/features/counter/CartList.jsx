import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartSummary } from "./CartDetails";
import { addToCart } from "./cartSlice";

export const CartFeature = () => {
  const [list, setList] = useState([]);

  const dispatchMethod = useDispatch();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => {
        return data.json();
      })
      .then((data) => setList(data));
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",

          justifyContent: "space-between",
          width: "30%",
          textAlign: "center",
          flexWrap: "wrap",
          margin: "10px",
          padding: "10px",
          border: "1px solid black",
          backgroundColor: "antiquewhite",
        }}
      >
        {list.map((item, i) => {
          return (
            <>
              <div key={i}>
                {item.title}
                <button
                  onClick={() =>
                    dispatchMethod(
                      addToCart({
                        price: item.price,
                        product: item.id,
                      })
                    )
                  }
                >
                  Add to Cart
                </button>
              </div>
            </>
          );
        })}
      </div>
      <CartSummary />
    </>
  );
};
