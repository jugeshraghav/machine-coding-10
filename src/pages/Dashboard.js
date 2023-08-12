import { useData } from "../contexts/DataContext";

export const Dashboard = () => {
  const { inventoryData } = useData();
  const totalStock = inventoryData.reduce((acc, curr) => acc + curr?.stock, 0);
  const totalDeliveredItems = inventoryData.reduce(
    (acc, curr) => acc + curr?.delivered,
    0
  );
  const lowStockItems = inventoryData.reduce(
    (acc, curr) => (curr?.stock > 10 ? acc : acc + 1),
    0
  );

  const calculatedDataArr = [
    { name: "total Stock", number: totalStock },
    { name: "total delivered ", number: totalDeliveredItems },
    { name: "low stock items", number: lowStockItems },
  ];
  return (
    <>
      <div className=" h-full w-full mt-5 flex  gap-10 items-start justify-around">
        {calculatedDataArr?.map((obj, index) => (
          <div
            key={index}
            className="bg-slate-500 text-white rounded-lg p-5 h-36 w-56 flex flex-col gap-5 items-center justify-center"
          >
            <h1 className="text-2xl font-bold">{obj.number}</h1>
            <p>{obj.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};
