import { NavLink, useNavigate } from "react-router-dom";
import { useData } from "../contexts/DataContext";

export const ProductsList = () => {
  const { dispatch, deptArr, finalSortedProductsList } = useData();
  const navigate = useNavigate();
  //select filters
  const selectDeptHandler = (e) => {
    dispatch({ type: "SELECT_DEPARTMENT", payload: e.target.value });
  };

  const showLowStockHandler = (e) => {
    e.target.checked
      ? dispatch({ type: "SHOW_LOW_STOCK_ITEMS", payload: true })
      : dispatch({ type: "SHOW_LOW_STOCK_ITEMS", payload: false });
  };

  const sortOnHandler = (e) => {
    dispatch({ type: "SORT_ON", payload: e.target.value });
  };
  return (
    <>
      <div className="mt-5 p-2">
        <div className="flex justify-between">
          <h1 className="font-bold text-lg">Products</h1>
          <select onChange={selectDeptHandler}>
            <option value="All Departments">All Departments</option>
            {deptArr.map((curr) => (
              <option value={curr}>{curr}</option>
            ))}
          </select>
          <div>
            <input
              type="checkbox"
              id="show_low_stock"
              onChange={showLowStockHandler}
            />
            <label htmlFor="show_low_stock">Low Stock Items</label>
          </div>
          <select onChange={sortOnHandler}>
            <option value="Name">Name</option>
            <option value="Price">Price</option>
            <option value="Stock">Stock</option>
          </select>
          <button
            className="bg-blue-600 text-white px-4 rounded-md cursor-pointer"
            onClick={() => navigate("/addProduct")}
          >
            New
          </button>
        </div>
        <div className="w-full">
          <table className="border p-2 mt-4 w-full">
            <tr className="border p-2 bg-slate-200">
              <th className="border p-2">Image</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Stock</th>
              <th className="border p-2">Supplier</th>
            </tr>

            {finalSortedProductsList?.map((data) => (
              <tr className="border p-2">
                <td>
                  <img
                    src={data?.imageUrl}
                    alt="product"
                    className="w-24 h-24"
                  />
                </td>
                <td className="border p-2">
                  <NavLink to={`/products/${data?.id}`}>{data?.name}</NavLink>
                </td>
                <td className="border p-2">{data?.description}</td>
                <td className="border p-2">{data?.price}</td>
                <td className="border p-2">{data?.stock}</td>
                <td className="border p-2">{data?.supplier}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};
