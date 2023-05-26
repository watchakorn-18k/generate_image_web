import Card from "./Card.tsx";

type Props = {
  urls: string[];
  thumbnails: string[];
  text: string;
};

export default function CardImage({ urls,text,thumbnails}: Props) {
    const CardElements = urls.map((url: string,index: number) => (
        <Card key={index} url={url} text={text} thumbnail={thumbnails[index]} index={index+1} />
      ));
  return (
      <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-2 :gap-5 lg:gap-5">
          {CardElements}
      
    </div>
    </div>
  );
}
