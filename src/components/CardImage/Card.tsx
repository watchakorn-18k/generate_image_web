import {
  IconDownload,
  IconShare,
  IconBrandMeta,
  IconBrandTwitter,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { Tooltip } from "@material-tailwind/react";
import FileSaver from "file-saver";
import "./CardImage.css";
import { useTranslation } from 'react-i18next';


type Props = {
  url: string;
  text: string;
  index: number;
};

export default function Card({ url, text, index }: Props) {
  const { t } = useTranslation();
  const handleDownload = () => {
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        FileSaver.saveAs(blob, `${text} ${index} wk18k.jpeg`);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="py-1 lg:py-5">
      <div className="indicator">
        <span className="indicator-item badge badge-secondary">#{index}</span>
        <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl">
        <Tooltip className="text" content={`${t("tool-tip-image")} ${text} ${index}`} placement="right" >
          <figure>
          
            <img
              src={`${url}?v=${Math.floor(Math.random() * 100000)}`}
              className="w-full h-80 object-cover image-card"
              />
              
            </figure>
            </Tooltip>
          <div className="card-body">
            <h2 className="card-title"></h2>
            <p className="text">{text}</p>
            <div className="card-actions justify-end">
              <Tooltip className="text" content={t("tool-tip-download")} >
                <button className="btn-text" onClick={handleDownload}>
                  <IconDownload />
                </button>
              </Tooltip>
              <div className="dropdown">
              <Tooltip className="text" content={t("tool-tip-share")} >
                <label tabIndex={0} className="btn-text">
                  <IconShare />
                  </label>
                </Tooltip>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a
                      href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(
                        url
                      )}`}
                      target="_blank"
                    >
                      <IconBrandMeta />
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                        url
                      )}&text=Generate%20image%20from%20text%20with%20 by wk18k!`}
                      target="_blank"
                    >
                      <IconBrandTwitter />
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
                        url
                      )}&title=My%20Shared%20Image&summary=Generatek%20image%20from%20text%20with%20 by wk18k!`}
                      target="_blank"
                    >
                      <IconBrandLinkedin />
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
