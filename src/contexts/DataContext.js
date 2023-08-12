import { createContext, useContext, useReducer } from "react";
import { dataReducer, initial_state } from "../reducers/DataReducer";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, initial_state);
  const { inventoryData } = state;

  ////
  const deptArr = inventoryData?.reduce(
    (acc, curr) =>
      acc.includes(curr.department) ? acc : [...acc, curr.department],
    []
  );

  const filteredProductListBasedOnDepartment = state?.department
    ? state?.department === "All Departments"
      ? inventoryData
      : inventoryData?.filter(
          ({ department }) =>
            department !== "All Departments" && department === state?.department
        )
    : inventoryData;

  const filteredProductListBasedOnLowStock = state?.lowStock
    ? filteredProductListBasedOnDepartment?.filter(({ stock }) => stock <= 10)
    : filteredProductListBasedOnDepartment;

  const finalSortedProductsList =
    state?.sortOn?.length > 0
      ? state?.sortOn === "Price"
        ? filteredProductListBasedOnLowStock.sort((a, b) => a.price - b.price)
        : state.sortOn === "Stock"
        ? filteredProductListBasedOnLowStock.sort((a, b) => a.stock - b.stock)
        : filteredProductListBasedOnDepartment.sort((a, b) =>
            a.name.localeCompare(b.name)
          )
      : filteredProductListBasedOnLowStock;

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        inventoryData,
        deptArr,
        finalSortedProductsList,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
