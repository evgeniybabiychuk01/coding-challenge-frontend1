import Image from "next/image";
import { useEffect, useState } from "react";
import { AppLoading, ProgressBar } from "../components";
import styles from "../styles/Home.module.css";
import useGoogleSheets from "use-google-sheets";
import { getMonth } from "../utils";
import { LeftTable, RightTable } from "../components/dashboard";
import { IOrderData } from "../types";
import { useDispatch } from "react-redux";
import { slice as dashboardSlice } from "store/slices/dashboard";
interface ITargetData {
  Month?: string;
  Target?: string;
}

const Home = () => {
  const { data, loading, error, refetch } = useGoogleSheets({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY ? process.env.NEXT_PUBLIC_GOOGLE_API_KEY : "",
    sheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEETS_ID ? process.env.NEXT_PUBLIC_GOOGLE_SHEETS_ID : "",
    sheetsOptions: [{ id: "Orders" }],
  });
  const {
    data: targetData,
    loading: targetLoading,
    error: targetError,
    refetch: targetRefetch,
  } = useGoogleSheets({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY ? process.env.NEXT_PUBLIC_GOOGLE_API_KEY : "",
    sheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEETS_ID ? process.env.NEXT_PUBLIC_GOOGLE_SHEETS_ID : "",
    sheetsOptions: [{ id: "Targets" }],
  });
  const [totalAmount, setTotalAmount] = useState<string>("5.237,27 €");
  const [targetMonth, setTargetMonth] = useState<string>("January");
  const [targetCount, setTargetCount] = useState<number>(1);
  const [countDown, setCountDown] = useState<number>(60);
  const [targets, setTargets] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    let countInterval = setInterval(() => {
      if (countDown == 0) {
        refetch();
        targetRefetch();
        setCountDown(60);
      } else setCountDown(countDown - 1);
    }, 1000);
    return () => {
      clearInterval(countInterval);
    };
  });

  useEffect(() => {
    if (data) calculateTotalAmount(1);
  }, [data]);

  useEffect(() => {
    if (targetCount) calculateTotalAmount(targetCount);
  }, [targetMonth]);

  useEffect(() => {
    if (targetData) {
      let arr: any = targetData[0]?.data.filter((el: ITargetData) => el.Month === targetMonth);
      setTargets(arr);
    }
  }, [targetData]);

  const calculateTotalAmount = (argu: number) => {
    let _data = data[0]?.data;
    let total: number = 0;
    let nextFilter = _data?.filter((el: IOrderData) => {
      let moonLanding = el["Order date"] ? new Date(el["Order date"]) : new Date();
      if (moonLanding.getMonth() + 1 === argu) {
        let number: number = el["Order volume"]?.split("€")[0]
          ? parseFloat(el["Order volume"]?.split("€")[0])
          : 0;
        total = total + number;
        return el;
      }
    });
    dispatch(dashboardSlice.actions.setOrders(nextFilter));
    dispatch(dashboardSlice.actions.setTargets(targetData));
    setTotalAmount(`${total.toFixed(2)} €`);
  };

  const handleLeftSwipe = () => {
    let { month, count } = getMonth(targetMonth, "last");
    setTargetCount(count);
    setTargetMonth(month);
  };
  const handleRightSwipe = () => {
    let { count, month } = getMonth(targetMonth, "next");
    setTargetCount(count);
    setTargetMonth(month);
  };
  return (
    <div className={styles.main} data-testid='dashboard'>
      <AppLoading startLoading={loading} />
      <span className={styles.ellipse_1}>
        <Image alt='ellipse-1' src='/images/ellipse.svg' width={795} height={795} />
      </span>
      <div className='flex items-center justify-between mx-4 mt-4'>
        <p className='font-SourceSerifPro font-normal text-xl' data-testid='heading'>
          Order Dashboard
        </p>
        <p className='font-montserrat font-normal text-xl z-10'>
          Refresh in <span className='font-bold font-montserrat'>{countDown}</span>
        </p>
      </div>
      <div className='flex'>
        <h3 className='font-montserrat font-bold text-3xl ml-4 w-72'>{targetMonth} 2021</h3>
        <span className='mr-2' onClick={handleLeftSwipe}>
          <Image alt='' src='/images/left.svg' width={32} height={32} />
        </span>
        <span onClick={handleRightSwipe}>
          <Image alt='' src='/images/right.svg' width={32} height={32} />
        </span>
      </div>
      <h1 className='font-robot text-[12rem]'>{totalAmount}</h1>

      <ProgressBar completedOrders={totalAmount} totalTargets={targets} />

      <div className='grid grid-cols-2 gap-4 mt-12'>
        <div className='bg-app-div-background h-72 overflow-auto'>
          <LeftTable />
        </div>
        <div className='bg-app-div-background h-72 overflow-auto'>
          <RightTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
