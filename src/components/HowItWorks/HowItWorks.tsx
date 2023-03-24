import React from "react";
import styles from "./HowItWorks.module.scss";
import chat from "../../assets/images/chats.svg";
import orders from "../../assets/images/orders.svg";
import payments from "../../assets/images/payments.svg";
import stars from "../../assets/images/stars.svg";
import stars2 from "../../assets/images/stars2.svg";
import stars3 from "../../assets/images/stars3.svg";
import stars4 from "../../assets/images/stars4.svg";
import red_arrow1 from "../../assets/images/red_arrow1.svg";
import red_arrow2 from "../../assets/images/red_arrow2.svg";
import lbdots from "../../assets/images/left_bot_dots.png";
type Props = {};

const HowItWorks = (props: Props) => {
  const container = `${styles.works__container} ${styles.works__container_top}`;
  const midBox = `${styles.works__card_mid_box} ${styles.works__card_mid_box_transition}`;
  const botBox = ``;
  return (
    <section className={styles.works}>
      <div className={container}>
        <div className={styles.works__inner}>
          <div className={styles.works__cards_info}>
            <div>
              <div className={styles.works__card_top}>
                <div className={styles.works__card_top_wrapper}>
                  <div className={styles.works__card_top_box}>
                    <div className={styles.works__card_top_content}>
                      <p className={styles.works__card_top_title}>Chats</p>
                      <p className={styles.works__card_top_text}>
                        Connect to anyone in your supply chain and exchange
                        messages
                      </p>
                    </div>
                  </div>
                  <div className={styles.works__card_top_iconTop}>
                    <div>
                      <span>
                        <img src={chat} alt="chat" />
                      </span>
                    </div>
                  </div>
                  <div className={styles.works__card_top_iconStars}>
                    <div>
                      <span>
                        <img
                          src={stars}
                          alt="stars shine bright like a diamond ;)"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <img
                  src={red_arrow1}
                  alt="red arrow"
                  className={styles.works__card_top_red_arrow}
                />
              </div>
              <div className={styles.works__card_mid}>
                <div className={styles.works__card_mid_wrapper}>
                  <div className={midBox}>
                    <div className={styles.works__card_mid_content}>
                      <p className={styles.works__card_mid_title}>Orders</p>
                      <p className={styles.works__card_mid_text}>
                        Create or confirm purchase orders with tap of a button.
                      </p>
                    </div>
                  </div>
                  <div className={styles.works__card_mid_iconMid}>
                    <div>
                      <span>
                        <img src={orders} alt="orders" />
                      </span>
                    </div>
                  </div>
                  <div className={styles.works__card_mid_iconStars}>
                    <div>
                      <span>
                        <img src={stars3} alt="stars" />
                      </span>
                    </div>
                  </div>
                </div>
                <img
                  src={red_arrow2}
                  alt="red arrow"
                  className={styles.works__card_mid_red_arrow2}
                />
              </div>
              <div className={styles.works__card_bot}>
                <div className={styles.works__card_bot_wrapper}>
                  <div className={styles.works__card_bot_box}>
                    <div className={styles.works__card_bot_content}>
                      <p className={styles.works__card_mid_title}>Payments</p>
                      <p className={styles.works__card_mid_text}>
                        Send invoices and reconcile payments in one dashboard
                      </p>
                    </div>
                  </div>
                  <div className={styles.works__card_bot_iconBot}>
                    <div>
                      <span>
                        <img src={payments} alt="payments" />
                      </span>
                    </div>
                  </div>
                  <div className={styles.works__card_bot_iconStars}>
                    <div>
                      <span>
                        <img src={stars2} alt="" />
                      </span>
                    </div>
                  </div>
                  <div className={styles.works__card_bot_iconStars2}>
                    <div>
                      <span>
                        <img src={stars4} alt="" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.works__card_bot_dots}>
                  <div>
                    <span>
                      <img src={lbdots} alt="dots" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.works__text_infos}>
            <h3 className={styles.works__info_title}></h3>
            <p className={styles.works__info_text}></p>
            <button className={styles.works__info_btn}></button>
            <div className={styles.works__info_dots}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
