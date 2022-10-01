import React from 'react'
import "./bodyPart.scss"
import gym from "../../accsets/image/gym5.png"
const BodyPart = ({item,bodyPart,setBodyPart}) => {
  return (
    <div className='body_Part'>
      <img className='image-gym' src={gym} alt= "" onClick={() =>  {
        setBodyPart(item)
        window.scrollTo({ top: 1400, left: 100, behavior: "smooth" });
      } } />
      <div className="item-bodyPart">{item}</div>
    </div>
  )
}

export default BodyPart
