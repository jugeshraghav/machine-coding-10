import { inventoryData } from "../data/Data";
localStorage.setItem("inventoryData", JSON.stringify(inventoryData));

const initial_state = {
  inventoryData: JSON.parse(localStorage.getItem("inventoryData")),

  //filters
  department: "All Departments",
  lowStock: false,
  sortOn: "",
};

const dataReducer = (state, action) => {
  const { type, payload } = action;
  console.log(payload);
  switch (type) {
    case "SELECT_DEPARTMENT":
      return { ...state, department: payload };
    case "SHOW_LOW_STOCK_ITEMS":
      return { ...state, lowStock: payload };
    case "SORT_ON":
      return { ...state, sortOn: payload };

    ///Add New Product

    case "ADD_NEW_PRODUCT":
      return {
        ...state,
        inventoryData: [...state.inventoryData, payload],
      };
    default:
      return state;
  }
};

export { initial_state, dataReducer };
