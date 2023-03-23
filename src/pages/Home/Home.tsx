import Header from "../../components/Header/Header";
import styles from "./Home.module.scss";
import grey_dots from "../../assets/images/dots-under-text.png";
import dekstop from "../../assets/images/app.svg";
import phone from "../../assets/images/phone.svg";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className={styles.home}>
      <div className={styles.home__grey2_square}>
        <img
          src={grey_dots}
          alt="grey diamonds"
          className={styles.home__grey_dots}
        />
      </div>
      <div className={styles.home__red_square}>
        <div className={styles.home__red_square2}>
          <div className={styles.home__square_wrapper}>
            <img src={dekstop} alt="app" className={styles.home__square_app} />
            <img src={phone} alt="mobile" className={styles.home__square_phone} />
            <div className={styles.home__dots_left}></div>
            <div className={styles.home__dots_bottom}></div>
          </div>
        </div>
      </div>
      <div className={styles.home__grey1_square}></div>
      <main className={styles.home__main}>
        <Header />
      </main>
    </div>
  );
};

export default Home;
