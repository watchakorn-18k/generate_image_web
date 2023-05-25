import "./Footer.css";
import { useTranslation } from "react-i18next";
import {
  SiFastapi,
  SiPython,
  SiTsnode,
  SiVite,
} from "@icons-pack/react-simple-icons";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className="pt-10">
      <footer className="footer p-5 bg-neutral text-neutral-content flex justify-center md:flex md:justify-around ">
        <div>
          <span className="footer-title"> {t("by")}</span>
          <div className="grid grid-flow-row grid-cols-1 md:grid-flow-col gap-5">

            <div className="grid grid-flow-col gap-0 md:gap-1">
              <SiFastapi />
              <SiPython />
              <SiVite />
              <SiTsnode />
            </div>

            <p >{t("name_1")} ( Front-End / Back-End )</p>
          </div>
          <div className="grid grid-flow-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-figma"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M15 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
              <path d="M6 3m0 3a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3z"></path>
              <path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15"></path>
            </svg>
            <p className="px-2">{t("name_2")} ( UX / UI )</p>
          </div>
        </div>
        <div>
          <span className="footer-title">SOURCE</span>
          <div className="grid grid-flow-col gap-1">
            <a
              href="https://github.com/watchakorn-18k/generate_image_web"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-github hover:text-blue-500 hover:shadow-lg transition duration-300"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
      <div className="footer p-2 bg-neutral text-neutral-content flex justify-center md:flex md:justify-around ">
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 gap-1 place-items-center">
          <img
            src="https://sciencetech.nrru.ac.th/vendor/bootstrap/images/logo_nrru.png"
            alt=""
            className="w-5 grayscale brightness-150 contrast-125 hover:grayscale-0 hover:contrast-100 transition duration-300"
            draggable="false"
          />
            <span className="footer-title">NRRU</span>
          </div>
         
        </div>
        
      </div>
    </div>
  );
}
