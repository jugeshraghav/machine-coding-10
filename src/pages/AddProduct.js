import { useState } from "react";
import { useData } from "../contexts/DataContext";
import { v4 as uuid } from "uuid";
export const AddProduct = () => {
  const { state, deptArr, dispatch } = useData();
  console.log(state.inventoryData);
  const initialNewProductDetails = {
    department: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    sku: "",
    supplier: "",
    delivered: 0,
    imageUrl: "",
  };
  const [newProductDetails, setNewProductDetails] = useState(
    initialNewProductDetails
  );
  //
  const newProductDetailsHandler = (e) => {
    e.target.name === "price" ||
    e.target.value === "stock" ||
    e.target.value === "delivered"
      ? setNewProductDetails({
          ...newProductDetails,
          [e.target.name]: Number(e.target.value),
        })
      : setNewProductDetails({
          ...newProductDetails,
          [e.target.name]: e.target.value,
        });
  };

  const addNewProductHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_NEW_PRODUCT",
      payload: { ...newProductDetails, id: uuid() },
    });
    setNewProductDetails(initialNewProductDetails);
  };
  return (
    <>
      <div className=" w-full flex flex-col gap-5 items-center mt-5">
        <h1 className="text-xl font-bold">Add New Product</h1>
        <form
          className="flex flex-col gap-5 w-full p-10"
          onSubmit={(e) => addNewProductHandler(e)}
        >
          <div className="flex flex-col w-full">
            <label>Add Department</label>
            <select
              className="w-full p-4 border"
              name="department"
              required
              value={newProductDetails.department}
              onChange={newProductDetailsHandler}
            >
              <option>Select Department</option>
              {deptArr.map((curr) => (
                <option value={curr}>{curr}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label>Name:</label>
            <input
              type="text"
              className="w-full p-4 border"
              name="name"
              required
              value={newProductDetails?.name}
              onChange={newProductDetailsHandler}
            ></input>
          </div>
          <div className="flex flex-col w-full">
            <label>Description:</label>
            <textarea
              rows="5"
              className="w-full p-4 border"
              name="description"
              value={newProductDetails.description}
              required
              onChange={newProductDetailsHandler}
            ></textarea>
          </div>
          <div className="flex flex-col w-full">
            <label>Price:</label>
            <input
              className="w-full p-4 border"
              name="price"
              required
              value={newProductDetails?.price}
              onChange={newProductDetailsHandler}
            ></input>
          </div>
          <div className="flex flex-col w-full">
            <label>Stock</label>
            <input
              className="w-full p-4 border"
              name="stock"
              required
              value={newProductDetails?.stock}
              onChange={newProductDetailsHandler}
            ></input>
          </div>
          <div className="flex flex-col w-full">
            <label>SKU:</label>
            <input
              className="w-full p-4 border"
              name="sku"
              required
              value={newProductDetails.sku}
              onChange={newProductDetailsHandler}
            ></input>
          </div>
          <div className="flex flex-col w-full">
            <label>Supplier:</label>
            <input
              className="w-full p-4 border"
              name="supplier"
              required
              value={newProductDetails?.supplier}
              onChange={newProductDetailsHandler}
            ></input>
          </div>
          <div className="flex flex-col w-full">
            <label>Delivered:</label>
            <input
              className="w-full p-4 border"
              name="delivered"
              required
              value={newProductDetails?.delivered}
              onChange={newProductDetailsHandler}
            ></input>
          </div>
          <div className="flex flex-col w-full">
            <label>Image Url:</label>
            <input
              className="w-full p-4 border"
              name="imageUrl"
              required
              value={newProductDetails.imageUrl}
              onChange={newProductDetailsHandler}
            ></input>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 rounded-md cursor-pointer "
          >
            Add Product
          </button>
        </form>
      </div>
    </>
  );
};
