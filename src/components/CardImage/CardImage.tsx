import Card from "./Card.tsx";

type Props = {
  urls: string[];
  text: string;
};

export default function CardImage({ urls,text}: Props) {
    const CardElements = urls.map((url: string,index: number) => (
        <Card key={index} url={url} text={text} index={index+1} />
      ));
  return (
      <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 :gap-5 lg:gap-5">
          {CardElements}
      
    </div>
    </div>
  );
}
