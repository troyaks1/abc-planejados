import Button from "@/interfaces/frontend/Button";

export default function Button ({...props}: Button): JSX.Element {
  
  const handleClick = () => {
    props.onClick();
  }
  
  return (
    <div className={`flex relative justify-center p-${props.style.padding || 2}`}>
    <div className={`flex max-w-xs h-${props.style.height} items-stretch rounded-full overflow-hidden shadow-sm ${props.color.terceary.shadow}`}>
      <button
        className={`${props.color.terceary.bg} ${props.color.terceary.text} w-${props.style.width} text-${props.style.text} font-bold justify-center items-center rounded-l-full outline-none bg-opacity-75`}
        onClick={() => handleClick()}
        title={`${props.title}`}
      > {props.text} </button>
    </div>
  </div>
  )
}