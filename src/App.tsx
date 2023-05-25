// import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { IconLoader3 } from "@tabler/icons-react";
import image_logo from "@/assets/image_logo.png";
import ImageShow from "./components/ImageShow/ImageShow.tsx";
import TextPrompt from "./components/TextPrompt/TextPrompt.tsx";
import CardImage from "./components/CardImage/CardImage.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import { useTranslation } from 'react-i18next';



export default function App() {
  const { t } = useTranslation();
  const [data, setData] = useState({ status_gen: false, images: [], prompt_text: "" });

  const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
  }
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "https://fast-apiimggen.etwg34dassad211.repl.co/image"
        );
        setData(result.data);
        console.log(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    
    <div className="flex flex-col min-h-screen justify-between" onContextMenu={handleContextMenu}>
      <Navbar />
      <div className="container mx-auto px-5 flex flex-col justify-between">
        <div className="grid grid-cols-1 gap-2">

          <ImageShow src_image={image_logo} />
          
          <TextPrompt status_gen={data.status_gen} />
          {data.status_gen === false ? (
            <center>
              <IconLoader3 className="animate-spin h-20 w-20 mr-3" />
              <p className="text-center text-xl">{t('loading')}</p>
            </center>
          ) : (
            <CardImage text={data.prompt_text} urls={data.images} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
