import { useState, useEffect } from "react";
import style from "./MoreMoney.module.scss";
import left_img1 from "../../assets/images/chat-left1.png";
import left_img2 from "../../assets/images/order-left2.png";
import left_img3 from "../../assets/images/pay-left3.png";
import right_img1 from "../../assets/images/chat-right1.png";
import right_img2 from "../../assets/images/order-right2.png";
import right_img3 from "../../assets/images/pay-right3.png";
import stars_mm from "../../assets/images/stars_mm.svg";
import dots from "../../assets/images/dots_mm.png";

type Props = {};

const MoreMoney: React.FC<Props> = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showAnimation, setShowAnimation] = useState<Boolean>(false);

  const textTitleOptions = ["More Buddy", "More Speedy", "More Money"];

  const textOptions = [
    [
      "Create chats with any business (even if they're not on Tinvio)",
      "Fully integrated with your favorite chat apps",
      "Real-time messages and alerts",
    ],
    [
      "Create or confirm purchase orders at lightning speed",
      "Manage inventory details and availability in real-time",
      "24/7 order insights and data reports",
    ],
    [
      "Send invoices and easily track them until they're paid",
      "Real-time payments settlement and reconciliation",
      "Safe, secure, and compliant",
    ],
  ];

  const imagePairs = [
    {
      left1: { left_img1 },
      right1: { right_img1 },
    },
    {
      left2: { left_img2 },
      right2: { right_img2 },
    },
    {
      left3: { left_img3 },
      right3: { right_img3 },
    },
  ];

  const leftImageObj =
    imagePairs[currentIndex].left1 ||
    imagePairs[currentIndex].left2 ||
    imagePairs[currentIndex].left3;

  const rightImageObj =
    imagePairs[currentIndex].right1 ||
    imagePairs[currentIndex].right2 ||
    imagePairs[currentIndex].right3;

  const leftImageSrc = leftImageObj
    ? Object.values(leftImageObj)[0]
    : undefined;

  const rightImageSrc = rightImageObj
    ? Object.values(rightImageObj)[0]
    : undefined;

  const handleClick = (index: number) => {
    setCurrentIndex(index);
    setShowAnimation(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAnimation(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [showAnimation]);

  const title = `${style.more__money_title} ${style.more__money_title_indent}`;

  return (
    <div className={style.more__money}>
      <div className={style.more__money_container}>
        <div className={style.more__money_inner}>
          <h3 className={title}>
            <span>Smarter supply chain transactions.</span>
            <div className={style.more__money_title_wrap}>
              <span
                className={`${style.more__money_title_span} ${
                  showAnimation ? style.animation : ""
                }`}
              >
                {textTitleOptions[currentIndex]}
              </span>
            </div>
          </h3>
          <div className={style.more__money_buttons}>
            <a
              className={`${style.more__money_buttons_chats} ${
                currentIndex === 0 ? style.active : ""
              }`}
              onClick={() => {
                handleClick(0);
              }}
            >
              Chats
            </a>
            <a
              className={`${style.more__money_buttons_orders} ${
                currentIndex === 1 ? style.active : ""
              }`}
              onClick={() => {
                handleClick(1);
              }}
            >
              Orders
            </a>
            <a
              className={`${style.more__money_buttons_payments} ${
                currentIndex === 2 ? style.active : ""
              }`}
              onClick={() => {
                handleClick(2);
              }}
            >
              Payments
            </a>
          </div>
          <ul className={style.more__money_list}>
            <li className={style.more__money_item1}>
              {textOptions[currentIndex][0]}
            </li>
            <li className={style.more__money_item2}>
              {textOptions[currentIndex][1]}
            </li>
            <li className={style.more__money_item3}>
              {textOptions[currentIndex][2]}
            </li>
          </ul>
          <div className={style.more__money_button_features}>
            <a href="/features">More Features</a>
          </div>
        </div>
      </div>
      <div className={style.more__money_grey_square}></div>
      <div className={style.more__money_red_square}>
        <div className={style.more__money_red_square_sm}>
          <div className={style.more__money_square_content}>
            <div
              className={`${style.more__money_left_img} ${
                showAnimation ? style.animation : ""
              }`}
            >
              <div className={style.more__money_img_inner}>
                <span>
                  <img src={leftImageSrc} alt="" />
                </span>
              </div>
            </div>
            <div
              className={`${style.more__money_right_img} ${
                showAnimation ? style.animation : ""
              }`}
            >
              <div className={style.more__money_img_inner}>
                <span>
                  <img src={rightImageSrc} alt="" />
                </span>
              </div>
            </div>
            <div className={style.more__money_stars}>
              <span>
                <img src={stars_mm} alt="stars" />
              </span>
            </div>
            <div className={style.more__money_dots}>
              <span>
                <img src={dots} alt="dots" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreMoney;
