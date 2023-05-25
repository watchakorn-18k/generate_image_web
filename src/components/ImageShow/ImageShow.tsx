import "./ImageShow.css";

type Props = {
    src_image: string
}

export default function ImageShow({src_image}: Props) {
  return (
      <div className="flex justify-center hover:rotate-2 transition duration-500">
          <img src={src_image} alt="" />
    </div>
  )
}