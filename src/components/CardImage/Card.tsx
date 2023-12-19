import {
  IconDownload,
  IconShare,
  IconBrandMeta,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconCopy,
} from "@tabler/icons-react";
import { Tooltip } from "@material-tailwind/react";
import FileSaver from "file-saver";
import "./CardImage.css";
import { useTranslation } from "react-i18next";
import { copyImageToClipboard } from "copy-image-clipboard";

type Props = {
  url: string;
  thumbnail: string;
  text: string;
  index: number;
};

export default function Card({ url, text, index, thumbnail }: Props) {
  const { t } = useTranslation();
  const handleDownload = () => {
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        FileSaver.saveAs(
          blob,
          `${index}_${thumbnail.slice(58, -5)}-wk18k.jpeg`
        );
      })
      .catch((err) => console.error(err));
  };

  const handleCopyImage = async () => {
    try {
      copyImageToClipboard(url)
        .then(() => {
          console.log("Image Copied");
        })
        .catch((e) => {
          console.log("Error: ", e.message);
        });
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="py-1 lg:py-5">
      <div className="indicator">
        <span className="indicator-item p-3 rounded-full badge badge-warning">
          #{index}
        </span>
        <div className="card card-compact w-80 md:w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={`${thumbnail}?v=${index}`}
              className="w-full h-80 object-cover image-card"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {t("scenario")} {index}
            </h2>
            <p className="text">{text}</p>
            <div className="card-actions justify-end">
              <Tooltip className="text" content={t("tool-tip-copy")}>
                <button className="btn-text" onClick={handleCopyImage}>
                  <IconCopy />
                </button>
              </Tooltip>
              <Tooltip className="text" content={t("tool-tip-download")}>
                <button className="btn-text" onClick={handleDownload}>
                  <IconDownload />
                </button>
              </Tooltip>
              <div className="dropdown dropdown-end xl:dropdown-right ">
                <Tooltip className="text" content={t("tool-tip-share")}>
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
