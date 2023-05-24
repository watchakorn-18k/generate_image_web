import axios from 'axios';
import { useState } from "react";
import { IconArrowRight } from "@tabler/icons-react";
import "./TextPrompt.css";
import { useTranslation } from 'react-i18next';



type Props = {
  status_gen: boolean;
}


export default function TextPrompt({ status_gen }: Props) {
  const { t} = useTranslation();
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
    console.log(event.target.value);
  };

  const SendData = () => {
    axios.post('https://fast-apiimggen--etwg34dassad211.repl.co/generate-image', { prompt: inputText })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-center">
      <div className="form-control w-3/4 md:w-4/5 ">
        <div className="input-group rounded rounded-full">
          <input
            type="text"
            placeholder={t('prompt') ?? ""}
            className="input w-full input-bordered input-prompt"
            onChange={handleInputChange} disabled={!status_gen}
          />

          <button
            className={`${!status_gen ? "btn btn-square h-14 w-14 md:h-20 sm:w-20 btn-search relative mobile-top right-3 md:right-5 hover:bg-blue-500 btn-disable" : "btn btn-square h-14 w-14 md:h-20 sm:w-20 btn-search relative mobile-top right-3 md:right-5 hover:bg-blue-500"}`}
            onClick={SendData} disabled={!status_gen}
          >
            <IconArrowRight
              className="relative right-0 bounce2"
              width={"30"}
              height={"30"}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
