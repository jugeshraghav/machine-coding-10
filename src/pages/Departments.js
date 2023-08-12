import { useNavigate } from "react-router-dom";
import { useData } from "../contexts/DataContext";

export const Departments = () => {
  const { deptArr, dispatch } = useData();

  const navigate = useNavigate();
  const selectDepartmentHandler = (department) => {
    dispatch({ type: "SELECT_DEPARTMENT", payload: department });
    navigate("/products");
  };

  return (
    <>
      <div className=" h-full w-full mt-5 flex  gap-10 items-start justify-around">
        {deptArr?.map((curr, index) => (
          <div
            key={index}
            className="bg-slate-500 text-white rounded-lg p-5 h-36 w-56 flex flex-col gap-5 items-center justify-center cursor-pointer hover:bg-white hover:text-slate-900"
            onClick={() => selectDepartmentHandler(curr)}
          >
            <p className="text-xl font-bold">{curr}</p>
          </div>
        ))}
      </div>
    </>
  );
};
