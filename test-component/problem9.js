/*
As you can see, refFromUseRef persists its value even when the component
 rerenders while refFromCreateRef does not
*/
import React,{createRef} from 'react'

 const  DifferenceuseRefAndCreateRef= () => {
    const [renderIndex, setRenderIndex] = React.useState(1)
   const refFromUseRef = React.useRef() // 
   const refFromCreateRef = createRef()

   if (!refFromUseRef.current) {
      refFromUseRef.current = renderIndex
   }

   if (!refFromCreateRef.current) {
       
      refFromCreateRef.current = renderIndex
      
   }

   return (
      <>
         <p>Current render index: {renderIndex}</p>
         <p>
            <b>refFromUseRef</b> value: {refFromUseRef.current}
         </p>
         <p>
            <b>refFromCreateRef</b> value:{refFromCreateRef.current}
         </p>

         <button onClick={() => setRenderIndex(prev => prev + 1)}>
            Cause re-render
         </button>
      </>
   )
}

export default DifferenceuseRefAndCreateRef;