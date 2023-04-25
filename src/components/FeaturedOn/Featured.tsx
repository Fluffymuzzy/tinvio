import { useState, useEffect, useRef } from "react";
import styles from "./Featured.module.scss";
import dots from "../../assets/images/dots_feat.png";
import techCrunch from "../../assets/images/techCrunch.svg";
import techInAsia from "../../assets/images/techInAsia.svg";
import pymnts from "../../assets/images/pymnts.svg";
import ventureBeat from "../../assets/images/ventureBeat.svg";

interface Props {}

const Featured: React.FC<Props> = () => {
  const featuredTitleRef = useRef<HTMLHeadingElement>(null);
  const featuredCompaniesRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showAnimation, setShowAnimation] = useState<Boolean>(false);

  useEffect(() => {
    setShowAnimation(true);
  }, [showAnimation]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const titleElement = featuredTitleRef.current;
    const companiesElement = featuredCompaniesRef.current;

    if (titleElement && companiesElement) {
      const titleRect = titleElement.getBoundingClientRect();
      const companiesRect = companiesElement.getBoundingClientRect();
      const threshold = window.innerHeight * 1;

      const titleDistance = Math.max(0, threshold - titleRect.top);
      const companiesDistance = Math.max(0, threshold - companiesRect.top);

      const titleTranslation = `translate3d(${-titleDistance / 5}px, 0px, 0px)`;
      const companiesTranslation = `translate3d(${
        companiesDistance / 8
      }px, 0px, 0px)`;

      titleElement.style.transform = titleTranslation;
      companiesElement.style.transform = companiesTranslation;
    }
  }, [scrollPosition]);
  return (
    <div className={styles.featured}>
      <div className={styles.featured__stars}></div>
      <div className={styles.featured__wrapper}>
        <div className={styles.featured__grey_square}></div>
        <div className={styles.featured__grey_square_right}></div>
        <div className={styles.featured__dots}>
          <span>
            <img src={dots} alt="dots" />
          </span>
        </div>
        <div className={styles.featured__line}></div>
        <div className={styles.featured__content}>
          <div className={styles.featured__inner}>
            <h4 className={styles.featured__title} ref={featuredTitleRef}>
              Featured On
            </h4>
            <div
              className={styles.featured__companies}
              ref={featuredCompaniesRef}
            >
              <img
                src={techCrunch}
                alt=""
                className={styles.featured__companies_company1}
              />
              <img
                src={techInAsia}
                alt=""
                className={styles.featured__companies_company2}
              />
              <img
                src={pymnts}
                alt=""
                className={styles.featured__companies_company3}
              />
              <img
                src={ventureBeat}
                alt=""
                className={styles.featured__companies_company4}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
