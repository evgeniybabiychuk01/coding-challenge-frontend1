import { useMemo } from "react";
import { useSelector } from "react-redux";
import { IOrderData } from "../../../types";
import { stringToNumber } from "../../../utils";
import SmallProgressBar from "../small-progress-bar";

const RightTable = () => {
  const { orderData } = useSelector(({ dashboard }: any) => dashboard);
  const tableData = useMemo(() => {
    if (orderData) {
      let sortedArray: IOrderData[] = [...orderData]?.sort((n1: IOrderData, n2: IOrderData) => {
        let value1 = n1["Order volume"] ? stringToNumber(n1["Order volume"]) : 0;
        let value2 = n2["Order volume"] ? stringToNumber(n2["Order volume"]) : 0;
        if (value1 < value2) return 1;
        if (value1 > value2) return -1;
        return 0;
      });
      return sortedArray;
    }
  }, [orderData]);
  return (
    <table className='items-center bg-transparent w-full'>
      <thead className='sticky top-0 border-b'>
        <tr>
          <th className='pl-6 font-SourceSerifPro align-middle py-3 text-xs uppercase font-semibold text-left'>
            Top 5 products
          </th>
          <th className='font-SourceSerifPro align-middle py-3 text-xs uppercase whitespace-nowrap font-semibold text-left'></th>
          <th className='font-SourceSerifPro align-middle py-3 text-xs uppercase whitespace-nowrap font-semibold text-left'></th>
        </tr>
      </thead>
      <tbody>
        {tableData &&
          tableData.slice(0, 5).map((el: IOrderData, index: number) => (
            <tr key={index}>
              <th className='px-6 align-middle font-montserrat text-xs whitespace-nowrap p-2 text-left'>
                {el["Product"]}
              </th>
              <th className='px-6 align-middle font-montserrat text-xs whitespace-nowrap p-2 text-left'>
                <SmallProgressBar />
              </th>
              <th className='px-6 align-middle font-montserrat text-xs whitespace-nowrap p-2 text-left'>
                {el["Order volume"]}
              </th>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default RightTable;
