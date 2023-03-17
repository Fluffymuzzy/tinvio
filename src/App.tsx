import Header from "@/components/Header/Header";
import dots from "@/assets/images/dots.png";
import app from "@/assets/images/app.svg";
import phone from "@/assets/images/phone.svg";

function App() {
  return (
    <div className="relative">
      <div className="md:absolute md:flex md:items-center md:w-[1031.82px] md:h-[1049.93px] md:left-1/2 md:top-[-20px] md:rounded-[136.46px] md:bg-main_bg md:rotate-[-45deg] md:z-0 sm:w-[999px] sm:h-[999px] sm:left-[-500px] sm:top-[455px] xs:w-[656.57px] xs:h-[669.73px] xs:left-[-334px] top-[442px]">
        <div className="flex absolute items-center justify-center md:w-[964.17px] md:h-[964.17px] md:top-[38px] md:left-[35px] sm:w-[921.24px] sm:h-[921.24px] rounded-[125.316px] z-[1] bg-red_square2">
          <div className="relative rotate-45 h-[500px] w-[964px]">
            <img
              src={app}
              alt="app"
              className="absolute z-[2] bg-contain scale-[1] translate-y-0 lg:top-[-154px] lg:right-[149px] sm:top-[-202px] sm:right-[125px] w-[829px] h-[634px]"
            />
            <img
              src={phone}
              alt="phone"
              className="absolute z-[1] bg-contain scale-[1] translate-y-0 lg:top-[144px] lg:left-[-183px] md:top-[-45px] md:left-[499px] md:w-[253px] md:h-[414px]"
            />
          </div>
        </div>
      </div>
      <main className="relative z-[2] overflow-hidden">
        <Header />
        <section>
          <div className="xxl:max-w-[1312px] xl:max-w-[1192px] lg:max-w-[1032px] lg:p-0 md:max-w-[1032px] md:py-0 md:px-10 mx-auto my-0 relative"></div>
        </section>
      </main>
    </div>
  );
}

export default App;
