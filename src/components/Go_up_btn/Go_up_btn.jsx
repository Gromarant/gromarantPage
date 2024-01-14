import { FaArrowCircleUp } from "react-icons/fa";

function Go_up_btn({onClick, title}) {
  return(
    <button onClick={onClick} title={title}><FaArrowCircleUp /></button>
  )
}

export default Go_up_btn;