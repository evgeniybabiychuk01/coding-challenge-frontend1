import { useSelector } from "react-redux";

interface IOrderData {
  "Order number"?: string;
  "Order date"?: string;
  Product?: string;
  "Order volume"?: string;
}

const LeftTable = () => {
  const { orderData } = useSelector(({ dashboard }: any) => dashboard);
  return (
    <table className='items-center bg-transparent w-full'>
      <thead className='sticky top-0 border-b'>
        <tr>
          <th className='px-6 font-SourceSerifPro align-middle py-3 text-xs uppercase whitespace-nowrap font-semibold text-left'>
            nr
          </th>
          <th className='px-6 font-SourceSerifPro align-middle py-3 text-xs uppercase whitespace-nowrap font-semibold text-left'>
            date
          </th>
          <th className='px-6 font-SourceSerifPro align-middle py-3 text-xs uppercase whitespace-nowrap font-semibold text-left'>
            product name
          </th>
          <th className='px-6 font-SourceSerifPro align-middle py-3 text-xs uppercase whitespace-nowrap font-semibold text-left'>
            order volume
          </th>
        </tr>
      </thead>
      <tbody>
        {orderData &&
          orderData.map((el: IOrderData, index: number) => (
            <tr key={index}>
              <th className='px-6 align-middle font-montserrat text-xs whitespace-nowrap p-2 text-left'>
                {el["Order number"]}
              </th>
              <td className='px-6 align-middle font-montserrat text-xs whitespace-nowrap p-2'>
                {el["Order date"]}
              </td>
              <td className='px-6 align-center font-montserrat text-xs whitespace-nowrap p-2'>
                {el.Product}
              </td>
              <td className='px-6 align-middle font-montserrat text-xs whitespace-nowrap p-2'>
                {el["Order volume"]}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default LeftTable;
