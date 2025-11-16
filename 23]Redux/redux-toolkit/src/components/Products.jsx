import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetproducts } from "../actions/ProductActions";

const Products = () => {
  const { products } = useSelector((state) => state.ProductReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getproducts()); used to fetch products directly in reducer file. Disadvantage: cannot be reused in other components . error = sate is undefined .
    dispatch(asyncgetproducts()); // used to fetch products using action file. Advantage: can be reused in other components
  }, [dispatch]);
  return (
    <div className="container w-[90vw] mx-auto bg-red-100 h-contain rounded-md mt-8 p-8">
      <h1 className="text-2xl font-bold text-red-900 pb-4">Product List</h1>
      {products && products.map((product, index) => {
        return (
          <div className="" key={product.id}>
            <h1>{product.title}
              <span className="cursor-pointer" onClick={() => DeleteHandler(index)}> ❌</span>
            </h1>
          </div>
        );
      })}
    </div>
  )
}

export default Products