import React from "react";
import './Canvas.css'
import { useRef } from "react";
// import {  useSelector } from "react-redux";
import { useAppSelector } from "../componentsB/hooks.ts";
 const Canvas:React.FC=()=>{
    const canAppRef:React.RefObject<HTMLCanvasElement>=useRef(null)
    
    const widthObj = useAppSelector(state=>state.todosA.list)
    console.log(widthObj)

    // const width= widthObj[0].text
    // console.log(width)

    function can(){
           console.log(canAppRef)
    const x = canAppRef.current
    console.log(x)
    let ctx:any
    if(x!==null){ ctx=x.getContext('2d') }

     
     
     if(widthObj.length!==0){
        let width=widthObj[0].title
        console.log(width)
        ctx.fillRect(10,10,+width,100)
     }else{ctx.clearRect(0,0,600,400)}
    }
    React.useEffect(()=>{can()})
   

 
    return(
        // <div>
            <canvas className="c1" ref={canAppRef}
            width={'600px'} 
            height={'400px'}
             >

            </canvas>
        // </div>
    )
    }

  export default Canvas  