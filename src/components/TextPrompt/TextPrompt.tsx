import axios from "axios";
import { useState, useEffect } from "react";
import { IconArrowRight } from "@tabler/icons-react";
import "./TextPrompt.css";
import { useTranslation } from "react-i18next";
import { Alert,Tooltip } from "@material-tailwind/react";

type Props = {
  status_gen: boolean;
};

export default function TextPrompt({ status_gen }: Props) {
  const { t } = useTranslation();
  const [inputText, setInputText] = useState("");
  const [open, setOpen] = useState(false);
  

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.key === "Enter") {
      SendData();
    }
  };

  useEffect(() => {
    if (open) {
      const timeoutId = setTimeout(() => {
        setOpen(false);
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [open]);

  const SendData = () => {
    if (inputText != "") {
      console.log(inputText,import.meta.env.VITE_URL_GENERATE);
      
      axios.post(
          `${import.meta.env.VITE_URL_GENERATE}`,
          { prompt: inputText }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setOpen(true);
    }
  };
  return (
    <div className="flex justify-center">
      <div className="form-control w-3/4 md:w-4/5 ">
        <div className="input-group rounded rounded-full">
          <input
            type="text"
            placeholder={t("prompt") ?? ""}
            className="input w-full input-bordered input-prompt"
            onChange={handleInputChange}
            disabled={!status_gen}
            onKeyDown={handleKeyDown}
          />
          <Tooltip className="text" content={t("tool-tip-generate")} >
          <button
            className={`${
              !status_gen
                ? "btn btn-square h-14 w-14 md:h-20 sm:w-20 btn-search relative mobile-top right-3 md:right-5 hover:bg-blue-500 btn-disable"
                : "btn btn-square h-14 w-14 md:h-20 sm:w-20 btn-search relative mobile-top right-3 md:right-5 hover:bg-blue-500"
            }`}
            onClick={SendData}
            disabled={!status_gen}
            >
            
            <IconArrowRight
              className="relative right-0 bounce2"
              width={"30"}
              height={"30"}
            />
            </button>
            </Tooltip>
        </div>
      </div>
      <Alert open={open} onClose={() => setOpen(false) }  color="red" animate={{
          mount: { y: 0 },
          unmount: { y: 100 },
        }} className="fixed bottom-4 w-4/4 md:w-1/2 right-1 md:right-5 z-10 ">
      {t("error") ?? ""}
      </Alert>
    </div>
  );
}
