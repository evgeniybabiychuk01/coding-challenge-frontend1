import styles from "styles/Bar.module.css";

interface IProgressBar {
  totalTargets?: any;
  completedOrders: string;
}

const ProgressBar = ({ completedOrders, totalTargets }: IProgressBar) => {
  const handleDataRef = () => (totalTargets ? totalTargets[0]?.Target : "Today");

  return (
    <div className={`${styles.progress} h-12 bg-app-grey mx-4`}>
      <div className={styles.bar}>
        <div
          className={`bg-app-blue h-full flex items-center justify-start px-4`}
          style={{ width: `${parseFloat(completedOrders.split("€")[0])}%` }}
        >
          {completedOrders} of {totalTargets ? totalTargets[0]?.Target : null}
        </div>
        <div className={styles.ref} data-ref={handleDataRef()}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
