import axios from "axios";
import { useState, useEffect } from "react";
import { IconArrowRight,IconAlertTriangleFilled } from "@tabler/icons-react";
import "./TextPrompt.css";
import { useTranslation } from "react-i18next";
import { Alert,Tooltip } from "@material-tailwind/react";

type Props = {
  status_gen: boolean;
  status_erro:boolean;
};

export default function TextPrompt({ status_gen ,status_erro }: Props) {
  const { t } = useTranslation();
  const [inputText, setInputText] = useState("");
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  

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
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [open]);


  useEffect(() => {
    const timeoutId = setInterval(() => {
      if (status_erro) {
        setOpenError(true);
        
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [status_erro]);

  const SendData = () => {
    if (inputText != "") {
      console.log(inputText,import.meta.env.VITE_URL_GENERATE);
      
      axios.post(
          `${import.meta.env.VITE_URL_GENERATE}`,
          { prompt: inputText }
        )
        .then((response) => {
          if (status_erro) {
            setOpenError(true);
          }
          console.log(response);
          console.log(status_erro);
        })
        .catch((error) => {
          console.log(error);
          if (status_erro) {
      setOpenError(true);
    }
        });
    } else {
      setOpen(true);
    }
    if (status_erro) {
      setOpenError(true);
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
            value={inputText}
          />
          <Tooltip className="text" content={t("tool-tip-generate")} >
          <button
            className={`${
              !status_gen
                ? "btn btn-square h-14 w-14 md:h-20 sm:w-20 btn-search relative mobile-top right-3 md:right-5 hover:bg-blue-500 btn-disable"
                : "btn btn-square h-14 w-14 md:h-20 sm:w-20 btn-search relative mobile-top right-3 md:right-5 hover:bg-blue-500 hover:right-3 hover:transition-all hover:duration-400 transition-all duration-300" 
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
      <div className="flex justify-center"><IconAlertTriangleFilled />&nbsp;&nbsp;{t("error") ?? ""}</div>
      </Alert>
      <Alert open={openError} onClose={() => {
        axios.post(
          `${import.meta.env.VITE_URL_STATUS_ERR }`,
          { status_erro: false }
        )
          .then(() => {
          setInputText("");
          setOpenError(false);
        })
        .catch((error) => {
          console.log(error);
        });
        
      } }  color="red" animate={{
          mount: { y: 0 },
          unmount: { y: 100 },
        }} className="fixed bottom-4 w-4/4 md:w-2/3 right-1 md:right-5 z-10 ">
      <div className="flex justify-center"><IconAlertTriangleFilled />&nbsp;&nbsp;{t("status_err") ?? ""}</div>
      </Alert>
    </div>
  );
}
