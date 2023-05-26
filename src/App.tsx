// import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import image_logo from "@/assets/image_logo.png";
import ImageShow from "./components/ImageShow/ImageShow.tsx";
import TextPrompt from "./components/TextPrompt/TextPrompt.tsx";
import CardImage from "./components/CardImage/CardImage.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import { useTranslation } from 'react-i18next';
import { Progress,Spinner } from "@material-tailwind/react";


export default function App() {
  const { t } = useTranslation();
  const [data, setData] = useState({ status_gen: false, images: [], prompt_text: "","thumbnail": [] });
  const [value, setValue] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
  }
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          import.meta.env.VITE_URL_API
        );
        setData(result.data);
        console.log(result.data);
        if (result.data.status_gen === true) {
          setIsRunning(false);
        }
        else {
          setIsRunning(true);
        }
      } catch (error) {
        console.log(error);
        setIsRunning(true);
      }
    };

  

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isRunning) {
      intervalId = setInterval(() => {
        setValue((value) => (value + 0.1) % 100);
      });
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  return (
    
    <div className="flex flex-col min-h-screen justify-between" onContextMenu={handleContextMenu}>
      <Navbar />
      <div className="container mx-auto px-5 flex flex-col justify-between">
        <div className="grid grid-cols-1 gap-2">

          <ImageShow src_image={image_logo} />
          
          <TextPrompt status_gen={data.status_gen} />
          {data.status_gen === false ? (
            <div className="grid grid-cols-1 gap-2 place-items-center p-10 md:p-32">
              
              <Spinner className="h-10 w-10 md:h-20 md:w-20 mr-3" />
              <p className="text-center text-xl animate-pulse">{t('loading')}</p>
              <Progress value={value}  className="w-60 md:w-1/2 " variant="gradient" />
            </div>
          ) : (
              <CardImage text={data.prompt_text} urls={data.images} thumbnails={data.thumbnail} />
              
          )}
        </div>
        
      </div>
      
      <Footer />
    </div>
  );
}
