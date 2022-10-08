import styles from "../../../styles/Bar.module.css";

const SmallProgressBar = () => {
  return (
    <div className={`${styles.progress} h-4 w-72 bg-app-grey`}>
      <div className={styles.bar}>
        <div
          className={`bg-app-blue h-full flex items-center justify-start px-4`}
          style={{ width: `100%` }}
        ></div>
      </div>
    </div>
  );
};

export default SmallProgressBar;
