import { useParams } from "react-router-dom";
import { useData } from "../contexts/DataContext";

export const SingleProduct = () => {
  const { inventoryData } = useData();
  const { productId } = useParams();

  const currentProduct = inventoryData?.find(
    ({ id }) => id === Number(productId)
  );

  return (
    <>
      <div className="flex flex-col gap-4 p-10">
        <h1 className="text-xl font-bold">{currentProduct?.name}</h1>
        <img
          src={currentProduct?.imageUrl}
          alt="product"
          className="w-full h-96"
        />
        <p>
          <span className="text-lg font-bold mr-2">Price:</span>
          RS {currentProduct?.price}
        </p>
        <p>
          <span className="text-lg font-bold mr-2">Stock:</span>
          {currentProduct?.stock}
        </p>
        <p>
          <span className="text-lg font-bold mr-2">Supplier:</span>
          {currentProduct?.supplier}
        </p>
        <p>
          <span className="text-lg font-bold mr-2">Department:</span>
          {currentProduct?.department}
        </p>
        <p>
          <span className="text-lg font-bold mr-2">SKU:</span>
          {currentProduct?.sku}
        </p>
        <p>
          <span className="text-lg font-bold mr-2">Delivered:</span>
          {currentProduct?.delivered}
        </p>
        <p>
          <span className="text-lg font-bold mr-2">Description:</span>
          {currentProduct?.description}
        </p>
      </div>
    </>
  );
};
