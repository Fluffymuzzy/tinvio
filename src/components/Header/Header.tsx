import logo from "@/assets/images/logo.svg";
import tinvio from "@/assets/images/tinvio.svg";
import arrow from "@/assets/images/arrow.svg";
import uk from "@/assets/images/uk.svg";
import id from "@/assets/images/id.svg";
import vt from "@/assets/images/vt.svg";
import th from "@/assets/images/th.svg";
import Button from "../Button/Button";

type Props = {};

const Header: React.FC = (props: Props) => {
  return (
    <header className="w-full fixed top-0 left-0 py-6 h-auto">
      <div className="header_responsive">
        <div className="flex relative items-center justify-between">
          <div className="flex">
            <a href="/" className="cursor-pointer flex items-center">
              <div className="relative w-[43.55px] h-[43.55px]">
                <img src={logo} alt="logo" className="absolute top-[2px]" />
              </div>
              <div className="relative ml-[7.4px] w-[58px] h-[19px]">
                <img src={tinvio} alt="logo" className="absolute top-[-1px]" />
              </div>
            </a>
            <div className="flex items-center relative cursor-pointer ml-[24px] mt-[2px]">
              <div className="mr-[4px] uppercase font-normal text-lang text-main">
                EN
              </div>
              <div className="rotate-0">
                <img src={arrow} alt="arrow" />
              </div>
              <div className="absolute hidden top-[33px] z-[5px] left-[-9px] h-[139px] w-[48px] rounded-[8px] p-[12px]">
                <div className="mb-[8px] w-[24px] h-[24px] cursor-poiner">
                  <span className="box-border inline-block overflow-hidden w-auto h-auto bg-none opacity-1 border-none m-0 p-0 relative max-w-full">
                    <img src={uk} alt="uk" />
                  </span>
                </div>
                <div className="mb-[8px] w-[24px] h-[24px] cursor-poiner">
                  <span className="box-border inline-block overflow-hidden w-auto h-auto bg-none opacity-1 border-none m-0 p-0 relative max-w-full">
                    <img src={id} alt="id" />
                  </span>
                </div>
                <div className="mb-[8px] w-[24px] h-[24px] cursor-poiner">
                  <span className="box-border inline-block overflow-hidden w-auto h-auto bg-none opacity-1 border-none m-0 p-0 relative max-w-full">
                    <img src={th} alt="th" />
                  </span>
                </div>
                <div className="mb-[8px] w-[24px] h-[24px] cursor-poiner">
                  <span className="box-border inline-block overflow-hidden w-auto h-auto bg-none opacity-1 border-none m-0 p-0 relative max-w-full">
                    <img src={vt} alt="vt" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <nav className="hidden sm:flex items-center justify-start list-none m-0 p-0">
            <div className="mr-[72px]">
              <a href="/" className="header_tab">
                Home
              </a>
            </div>
            <div className="mr-[72px]">
              <a href="/" className="header_tab">
                Features
              </a>
            </div>
            <div className="mr-0">
              <a href="/" className="header_tab">
                Company
              </a>
            </div>
          </nav>
          <div className="hidden sm:flex">
            <Button/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
