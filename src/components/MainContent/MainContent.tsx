import React from "react";
import styles from "./MainContent.module.scss";
import decor from "../../assets/images/decorations.svg";

type Props = {};

const MainContent: React.FC<Props> = () => {
  return (
    <div className={styles.main__content}>
      <div className={styles.main__content_info}>
        <h2 className={styles.main__content_title}>
          <img
            src={decor}
            alt="decorations"
            className={styles.main__content_decorations}
          />
          Collecting payments
          <span className={styles.main__content_span}> is easy, </span>
          right?
        </h2>
        <p className={styles.main__content_text}>
          Manage all your supply chain transactions in one dashboard. Get paid
          faster, reconcile quicker, grow bigger.
        </p>
        <div className={styles.main__content_button_wrapper}>
          <button type="button" className={styles.main__content_button}>
            Get Started Now
          </button>
          <span className={styles.main__content_span_smile}>
            It's free to try!
            <div className={styles.main__content_smile}></div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
