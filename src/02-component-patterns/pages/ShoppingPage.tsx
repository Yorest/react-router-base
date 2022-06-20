import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { useShoppingCart } from "../hooks/useShoppingCart";
import "../styles/custom-styles.css";
import { products } from "../data/products";





export const ShoppingPage = () => {


const {onProductCountChange,shoppingCart} = useShoppingCart();

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark"
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage className="custom-image" />
            <ProductTitle title={`Cafe Mug`} className="text-white" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}

        <div className="shopping-cart">
          {Object.entries(shoppingCart).map(([key, product]) => (
            <ProductCard
              key={key}
              product={product}
              className="bg-dark"
              style={{ width: "100px" }}
              onChange={onProductCountChange}
              value={product.count}
            >
              <ProductImage className="custom-image" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};
