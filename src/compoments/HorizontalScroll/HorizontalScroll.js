import React,{useContext} from 'react'
import BodyPart from '../BodyPart/BodyPart'
import { ScrollMenu,VisibilityContext } from 'react-horizontal-scrolling-menu'
import leftArow from "../../accsets/image/left-arrow.png"
import RightArow from "../../accsets/image/right-arrow.png"

const  LeftArrow =() => {
     const { isFirstItemVisible, scrollPrev } =
       React.useContext(VisibilityContext);
   
     return (
       <div disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
        <img src={RightArow} alt=""/>
       </div>
     );
   }
   const RightArrow =() => {
     const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
   
     return (
       <div disabled={isLastItemVisible} onClick={() => scrollNext()}>
           <img src={leftArow} alt=""/>
       </div>
     );
   }
   
const HorizontalScroll = ({data, bodyPart, setBodyPart}) => {
  return (
    <ScrollMenu  LeftArrow ={LeftArrow} RightArrow ={RightArrow}>
       {data.map((item ) =>(
          <div className="list__coures" key={item.id || item} style = {{padding :  " 0 8rem"}}>
           <BodyPart item ={item} bodyPart= {bodyPart} setBodyPart= {setBodyPart}/>
          </div>
       ))}
    </ScrollMenu>
  )
}

export default HorizontalScroll
