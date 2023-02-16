import { useState,useEffect } from 'react';


const Cta = ({data,style}) => {

  const [isRipple,setIsRipple] = useState(false);
  const [coords,setCoords] = useState({x : -1, y :-1})
  
    useEffect(()=>{
      if(coords.x !== -1 && coords.y !== -1){
        setIsRipple(true);
        setTimeout(()=> setIsRipple(false),500)
      }
    },[coords])

    useEffect(()=>{
      if(!isRipple) setCoords({x: -1, y:-1});
    },[isRipple])

  const handleClick = (e) =>{
    setCoords({
      x:e.clientX - e.target.offsetLeft,
      y:e.clientY - e.target.offsetTop
    })
  }

  return (
    <button className={style} onClick={handleClick}>{data}
    {isRipple ? <span className="absolute bg-white w-8 h-8 rounded-full -translate-x-2/4 -translate-y-2/4  animate-ripple" style={{left : coords.x + "px", top : coords.y + "px"}}></span> : ""}
    </button>
  )
}

export default Cta;