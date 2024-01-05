// import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import image_logo from "@/assets/image_logo.png";
import image_logo_1 from "@/assets/image_logo_1.png";
import image_logo_2 from "@/assets/image_logo_2.png";
import ImageShow from "./components/ImageShow/ImageShow.tsx";
import TextPrompt from "./components/TextPrompt/TextPrompt.tsx";
import Skeleton from "./components/CardImage/Skeleton.tsx";
import CardImage from "./components/CardImage/CardImage.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";

export default function App() {
  const [data, setData] = useState({
    status_gen: false,
    images: [],
    prompt_text: "",
    thumbnail: [],
    status_erro: false,
  });
  const [isRunning, setIsRunning] = useState(true);
  const choices = [image_logo, image_logo_1, image_logo_2];
  const [randomChoice] = useState(
    choices[Math.floor(Math.random() * choices.length)]
  );

  const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(import.meta.env.VITE_URL_API);
        setData(result.data);

        if (result.data.status_gen === true) {
          setIsRunning(false);
        } else {
          setIsRunning(true);
        }
      } catch (error) {
        setIsRunning(true);
      }
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    return () => clearInterval(intervalId);
  }, [isRunning]);

  return (
    <div
      className="flex flex-col min-h-screen justify-between"
      onContextMenu={handleContextMenu}
    >
      <Navbar />
      <div className="container mx-auto px-5 flex flex-col justify-between">
        <div className="grid grid-cols-1 gap-2">
          <ImageShow src_image={randomChoice} />

          <TextPrompt
            status_gen={data.status_gen}
            status_erro={data.status_erro}
          />

          {data.status_gen === false ? (
            <Skeleton />
          ) : (
            <CardImage
              text={data.prompt_text}
              urls={data.images}
              thumbnails={data.thumbnail}
            />
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
